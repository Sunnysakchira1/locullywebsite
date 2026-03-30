import type { SignalDetail } from "../db";
import type { FetchedPage } from "./fetch-page";

export function analyzeTechnical(
  page: FetchedPage,
  url: string
): {
  score: number;
  details: SignalDetail[];
} {
  const details: SignalDetail[] = [];
  let score = 0;
  const { html, headers } = page;

  // 1. Schema markup present (5 points)
  const hasJsonLd = /<script[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(
    html
  );
  const hasMicrodata = /itemscope|itemtype/i.test(html);
  const hasSchema = hasJsonLd || hasMicrodata;
  details.push({
    label: "Schema markup (JSON-LD or microdata)",
    passed: hasSchema,
    value: hasJsonLd ? "JSON-LD detected" : hasMicrodata ? "Microdata detected" : "Not found",
  });
  if (hasSchema) score += 5;

  // 2. LocalBusiness or Organization schema (5 points)
  const hasLocalBiz =
    /LocalBusiness|Organization|MedicalBusiness|HealthAndBeautyBusiness/i.test(
      html
    );
  details.push({
    label: "Business-type schema (LocalBusiness/Organization)",
    passed: hasLocalBiz,
  });
  if (hasLocalBiz) score += 5;

  // 3. Open Graph tags (5 points)
  const hasOg =
    /property=["']og:title["']/i.test(html) &&
    /property=["']og:description["']/i.test(html);
  details.push({
    label: "Open Graph tags (og:title, og:description)",
    passed: hasOg,
  });
  if (hasOg) score += 5;

  // 4. Meta description (5 points)
  const metaDescMatch = html.match(
    /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i
  );
  const metaDesc = metaDescMatch ? metaDescMatch[1] : null;
  const hasGoodMeta = !!metaDesc && metaDesc.length >= 50 && metaDesc.length <= 320;
  details.push({
    label: "Meta description (50-320 characters)",
    passed: hasGoodMeta,
    value: metaDesc
      ? `${metaDesc.length} chars`
      : "Not found",
  });
  if (hasGoodMeta) score += 5;

  // 5. SSL (5 points)
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  const hasSsl = normalizedUrl.startsWith("https://");
  details.push({
    label: "SSL certificate (HTTPS)",
    passed: hasSsl,
  });
  if (hasSsl) score += 5;

  return { score: Math.min(score, 25), details };
}

export async function checkSitemapAndRobots(
  url: string
): Promise<{ hasSitemap: boolean; hasRobots: boolean }> {
  const baseUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
  const origin = baseUrl.origin;

  let hasSitemap = false;
  let hasRobots = false;

  try {
    const robotsRes = await fetch(`${origin}/robots.txt`, {
      signal: AbortSignal.timeout(5000),
    });
    hasRobots = robotsRes.ok && (await robotsRes.text()).length > 10;
  } catch {}

  try {
    const sitemapRes = await fetch(`${origin}/sitemap.xml`, {
      signal: AbortSignal.timeout(5000),
    });
    hasSitemap =
      sitemapRes.ok && (await sitemapRes.text()).includes("<urlset");
  } catch {}

  return { hasSitemap, hasRobots };
}
