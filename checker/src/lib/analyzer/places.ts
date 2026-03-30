import type { SignalDetail } from "../db";

type PlacesResult = {
  score: number;
  details: SignalDetail[];
};

export async function analyzePresence(
  brandName: string,
  location: string,
  html: string
): Promise<PlacesResult> {
  const details: SignalDetail[] = [];
  let score = 0;

  // 1. Google Business Profile check (10 points)
  const apiKey = process.env.GOOGLE_API_KEY;
  if (apiKey) {
    try {
      const query = `${brandName} ${location}`;
      const apiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(query)}&inputtype=textquery&fields=name,rating,user_ratings_total,formatted_address&key=${apiKey}`;

      const res = await fetch(apiUrl, {
        signal: AbortSignal.timeout(10000),
      });
      const data = await res.json();

      if (data.candidates && data.candidates.length > 0) {
        const place = data.candidates[0];
        const rating = place.rating || 0;
        const reviewCount = place.user_ratings_total || 0;

        details.push({
          label: "Google Business Profile found",
          passed: true,
          value: `${rating} stars, ${reviewCount} reviews`,
        });
        score += 5;

        // Reviews quality (5 points)
        const hasGoodReviews = rating >= 4.0 && reviewCount >= 10;
        details.push({
          label: "Strong reviews (4.0+ rating, 10+ reviews)",
          passed: hasGoodReviews,
          value: `${rating}/5 from ${reviewCount} reviews`,
        });
        if (hasGoodReviews) score += 5;
      } else {
        details.push({
          label: "Google Business Profile found",
          passed: false,
          value: "Not found",
        });
        details.push({
          label: "Strong reviews (4.0+ rating, 10+ reviews)",
          passed: false,
          value: "No profile found",
        });
      }
    } catch {
      details.push({
        label: "Google Business Profile",
        passed: false,
        value: "Check failed",
      });
    }
  } else {
    details.push({
      label: "Google Business Profile",
      passed: false,
      value: "API key not configured",
    });
  }

  // 2. Social media links (5 points)
  const socialPatterns = [
    /facebook\.com/i,
    /instagram\.com/i,
    /linkedin\.com/i,
    /twitter\.com|x\.com/i,
    /youtube\.com/i,
    /tiktok\.com/i,
  ];
  const socialCount = socialPatterns.filter((pattern) =>
    pattern.test(html)
  ).length;
  const hasSocial = socialCount >= 2;
  details.push({
    label: "Social media presence (2+ platforms linked)",
    passed: hasSocial,
    value: `${socialCount} platforms found`,
  });
  if (hasSocial) score += 5;

  // 3. Multiple pages (5 points)
  const internalLinks = (
    html.match(/href=["']\/[^"']*["']/gi) || []
  ).length;
  const hasMultiplePages = internalLinks >= 5;
  details.push({
    label: "Multi-page site (5+ internal links)",
    passed: hasMultiplePages,
    value: `${internalLinks} internal links`,
  });
  if (hasMultiplePages) score += 5;

  // 4. Blog/content section (5 points)
  const hasBlog =
    /\/blog|\/articles|\/news|\/resources|\/insights/i.test(html) ||
    /blog|article|post/i.test(
      html.match(/<nav[\s\S]*?<\/nav>/i)?.[0] || ""
    );
  details.push({
    label: "Blog or content section",
    passed: hasBlog,
  });
  if (hasBlog) score += 5;

  return { score: Math.min(score, 25), details };
}
