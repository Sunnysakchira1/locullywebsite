import type { ScoreBreakdown } from "../db";
import { fetchPage } from "./fetch-page";
import { analyzeContent } from "./content-signals";
import { analyzeTechnical, checkSitemapAndRobots } from "./technical-signals";
import { analyzePageSpeed } from "./pagespeed";
import { analyzePresence } from "./places";

export type AnalysisInput = {
  url: string;
  brandName: string;
  industry: string;
  location: string;
};

export type AnalysisResult = {
  score: number;
  breakdown: ScoreBreakdown;
  recommendations: string[];
};

export async function runAnalysis(
  input: AnalysisInput
): Promise<AnalysisResult> {
  // Step 1: Fetch page HTML
  const page = await fetchPage(input.url);

  // Step 2: Run all analyses in parallel
  const [content, technical, authority, presence, sitemapCheck] =
    await Promise.all([
      analyzeContent(page.html),
      analyzeTechnical(page, input.url),
      analyzePageSpeed(input.url),
      analyzePresence(input.brandName, input.location, page.html),
      checkSitemapAndRobots(input.url),
    ]);

  // Add sitemap/robots to technical score
  if (sitemapCheck.hasSitemap) {
    const existingScore = technical.score;
    if (existingScore < 25) {
      technical.details.push({
        label: "XML Sitemap exists",
        passed: true,
      });
    }
  } else {
    technical.details.push({
      label: "XML Sitemap exists",
      passed: false,
    });
  }

  if (sitemapCheck.hasRobots) {
    technical.details.push({
      label: "Robots.txt exists",
      passed: true,
    });
  } else {
    technical.details.push({
      label: "Robots.txt exists",
      passed: false,
    });
  }

  const totalScore =
    authority.score + content.score + technical.score + presence.score;

  const breakdown: ScoreBreakdown = {
    authority: {
      score: authority.score,
      max: 25,
      details: authority.details,
    },
    content: {
      score: content.score,
      max: 25,
      details: content.details,
    },
    technical: {
      score: technical.score,
      max: 25,
      details: technical.details,
    },
    presence: {
      score: presence.score,
      max: 25,
      details: presence.details,
    },
  };

  const recommendations = generateRecommendations(breakdown);

  return {
    score: Math.min(totalScore, 100),
    breakdown,
    recommendations,
  };
}

function generateRecommendations(breakdown: ScoreBreakdown): string[] {
  const recs: string[] = [];

  // Authority recommendations
  if (breakdown.authority.score < 15) {
    recs.push(
      "Improve site speed — AI platforms prefer fast, well-performing sites"
    );
  }

  // Content recommendations
  const contentDetails = breakdown.content.details;
  if (!contentDetails.find((d) => d.label.includes("Content depth"))?.passed) {
    recs.push(
      "Add more content to your homepage — aim for 500+ words with clear service descriptions"
    );
  }
  if (!contentDetails.find((d) => d.label.includes("lists"))?.passed) {
    recs.push(
      "Use bullet points and numbered lists — AI platforms cite structured content more often"
    );
  }
  if (!contentDetails.find((d) => d.label.includes("FAQ"))?.passed) {
    recs.push(
      "Add an FAQ section — AI assistants pull directly from Q&A formatted content"
    );
  }

  // Technical recommendations
  const techDetails = breakdown.technical.details;
  if (!techDetails.find((d) => d.label.includes("Schema"))?.passed) {
    recs.push(
      "Add JSON-LD schema markup — this helps AI platforms understand your business"
    );
  }
  if (!techDetails.find((d) => d.label.includes("Business-type"))?.passed) {
    recs.push(
      "Add LocalBusiness schema with your address, hours, and services"
    );
  }
  if (!techDetails.find((d) => d.label.includes("Meta description"))?.passed) {
    recs.push(
      "Write a compelling meta description (120-160 chars) that summarizes your key services"
    );
  }

  // Presence recommendations
  const presDetails = breakdown.presence.details;
  if (
    !presDetails.find((d) => d.label.includes("Google Business"))?.passed
  ) {
    recs.push(
      "Create and optimize your Google Business Profile — critical for local AI recommendations"
    );
  }
  if (!presDetails.find((d) => d.label.includes("Blog"))?.passed) {
    recs.push(
      "Start a blog with comparison and educational content — AI platforms love citing in-depth articles"
    );
  }

  return recs.slice(0, 5);
}
