import type { SignalDetail } from "../db";

type PageSpeedResult = {
  score: number;
  details: SignalDetail[];
};

export async function analyzePageSpeed(url: string): Promise<PageSpeedResult> {
  const details: SignalDetail[] = [];
  let score = 0;

  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    // Return placeholder scores when no API key
    details.push({
      label: "Page speed analysis",
      passed: false,
      value: "API key not configured",
    });
    return { score: 0, details };
  }

  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(normalizedUrl)}&key=${apiKey}&strategy=mobile&category=performance`;

  try {
    const res = await fetch(apiUrl, {
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
      details.push({
        label: "Page speed analysis",
        passed: false,
        value: `API error: ${res.status}`,
      });
      return { score: 0, details };
    }

    const data = await res.json();
    const lighthouse = data.lighthouseResult;

    if (!lighthouse) {
      return { score: 0, details };
    }

    // 1. Performance score (10 points)
    const perfScore = Math.round(
      (lighthouse.categories?.performance?.score || 0) * 100
    );
    const goodPerf = perfScore >= 50;
    details.push({
      label: "Performance score (50+)",
      passed: goodPerf,
      value: `${perfScore}/100`,
    });
    if (goodPerf) score += 10;

    // 2. Core Web Vitals - LCP (5 points)
    const lcp =
      lighthouse.audits?.["largest-contentful-paint"]?.numericValue || 99999;
    const lcpSeconds = (lcp / 1000).toFixed(1);
    const goodLcp = lcp <= 4000;
    details.push({
      label: "Largest Contentful Paint (<4s)",
      passed: goodLcp,
      value: `${lcpSeconds}s`,
    });
    if (goodLcp) score += 5;

    // 3. Mobile friendly (5 points)
    const viewport = lighthouse.audits?.viewport?.score === 1;
    details.push({
      label: "Mobile-friendly viewport",
      passed: viewport,
    });
    if (viewport) score += 5;

    // 4. Fast load time (5 points)
    const si =
      lighthouse.audits?.["speed-index"]?.numericValue || 99999;
    const siSeconds = (si / 1000).toFixed(1);
    const fastLoad = si <= 5000;
    details.push({
      label: "Speed Index (<5s)",
      passed: fastLoad,
      value: `${siSeconds}s`,
    });
    if (fastLoad) score += 5;
  } catch (err) {
    details.push({
      label: "Page speed analysis",
      passed: false,
      value: "Request timed out",
    });
  }

  return { score: Math.min(score, 25), details };
}
