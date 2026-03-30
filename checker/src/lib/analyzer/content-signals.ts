import type { SignalDetail } from "../db";

export function analyzeContent(html: string): {
  score: number;
  details: SignalDetail[];
} {
  const details: SignalDetail[] = [];
  let score = 0;

  // Strip HTML tags for text analysis
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = text.split(/\s+/).length;

  // 1. Word count > 500 (5 points)
  const hasEnoughContent = wordCount > 500;
  details.push({
    label: "Content depth (500+ words)",
    passed: hasEnoughContent,
    value: `${wordCount} words`,
  });
  if (hasEnoughContent) score += 5;

  // 2. Heading hierarchy (5 points)
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const h2Count = (html.match(/<h2[\s>]/gi) || []).length;
  const h3Count = (html.match(/<h3[\s>]/gi) || []).length;
  const hasHeadings = h1Count >= 1 && h2Count >= 2;
  details.push({
    label: "Structured headings (H1, H2, H3)",
    passed: hasHeadings,
    value: `H1: ${h1Count}, H2: ${h2Count}, H3: ${h3Count}`,
  });
  if (hasHeadings) score += 5;

  // 3. Lists / bullet points (5 points)
  const ulCount = (html.match(/<ul[\s>]/gi) || []).length;
  const olCount = (html.match(/<ol[\s>]/gi) || []).length;
  const hasLists = ulCount + olCount >= 1;
  details.push({
    label: "Uses lists (AI prefers structured content)",
    passed: hasLists,
    value: `${ulCount + olCount} lists found`,
  });
  if (hasLists) score += 5;

  // 4. FAQ section (5 points)
  const hasFaq =
    /faq|frequently asked|common questions/i.test(html) ||
    /"@type"\s*:\s*"FAQPage"/i.test(html);
  details.push({
    label: "FAQ or Q&A section",
    passed: hasFaq,
  });
  if (hasFaq) score += 5;

  // 5. Specific details: pricing, address, phone (5 points)
  const hasPrice = /\$[\d,]+|฿[\d,]+|THB\s*[\d,]+|price|pricing/i.test(text);
  const hasAddress =
    /address|street|road|soi|sukhumvit|silom|bangkok/i.test(text);
  const hasPhone = /\+?\d[\d\s-]{8,}|tel:|phone/i.test(text);
  const specificityScore = [hasPrice, hasAddress, hasPhone].filter(
    Boolean
  ).length;
  const hasSpecifics = specificityScore >= 2;
  details.push({
    label: "Specific details (pricing, location, contact)",
    passed: hasSpecifics,
    value: `${specificityScore}/3 specificity signals`,
  });
  if (hasSpecifics) score += 5;

  return { score: Math.min(score, 25), details };
}
