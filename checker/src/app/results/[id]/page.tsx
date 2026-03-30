"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ScoreGauge } from "@/components/ScoreGauge";
import { ScoreBreakdown } from "@/components/ScoreBreakdown";
import { EmailGate } from "@/components/EmailGate";
import { Recommendations } from "@/components/Recommendations";
import type { ScoreBreakdown as ScoreBreakdownType } from "@/lib/db";

type ResultData = {
  id: string;
  score: number;
  breakdown: ScoreBreakdownType;
  recommendations: string[];
  brandName: string;
  url: string;
  industry: string;
  location: string;
};

export default function ResultsPage() {
  const params = useParams();
  const id = params.id as string;
  const [data, setData] = useState<ResultData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(`analysis-${id}`);
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, [id]);

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-text-muted text-sm">Loading results...</p>
        </div>
      </main>
    );
  }

  const shareText = `My AI Visibility Score is ${data.score}/100. Check yours for free:`;
  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <a href="/" className="text-lg font-bold tracking-wider text-text-main">
          LOCULLY
        </a>
        <a
          href="/"
          className="text-xs text-primary hover:text-primary/80 transition-colors"
        >
          Run another check
        </a>
      </header>

      <div className="max-w-3xl mx-auto px-6 pb-20">
        {/* Brand info */}
        <div className="text-center mb-2">
          <p className="text-text-dim text-sm">AI Visibility Report for</p>
          <h1 className="text-2xl font-bold text-text-main mt-1">
            {data.brandName}
          </h1>
          <p className="text-text-dim text-xs mt-1">{data.url}</p>
        </div>

        {/* Score gauge */}
        <div className="flex justify-center my-10">
          <ScoreGauge score={data.score} />
        </div>

        {/* Breakdown */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-text-muted mb-4 uppercase tracking-wider">
            Score Breakdown
          </h2>
          <ScoreBreakdown breakdown={data.breakdown} />
        </section>

        {/* Recommendations */}
        <section className="mb-8">
          <Recommendations recommendations={data.recommendations} />
        </section>

        {/* Email gate - full AI check */}
        <section className="mb-8">
          <EmailGate
            analysisId={data.id}
            brandName={data.brandName}
            industry={data.industry}
            location={data.location}
          />
        </section>

        {/* Share */}
        <section className="text-center">
          <p className="text-text-dim text-xs mb-3">Share your results</p>
          <div className="flex items-center justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 border border-card-border rounded-lg text-text-muted text-xs hover:border-primary/50 transition-colors"
            >
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 border border-card-border rounded-lg text-text-muted text-xs hover:border-primary/50 transition-colors"
            >
              Share on LinkedIn
            </a>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-16 text-center border-t border-card-border pt-10">
          <p className="text-text-muted text-sm mb-4">
            Want to improve your AI visibility?
          </p>
          <a
            href="https://locully.org"
            className="inline-flex px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Talk to Locully
          </a>
        </div>
      </div>
    </main>
  );
}
