"use client";

import type { ScoreBreakdown as ScoreBreakdownType } from "@/lib/db";

const categoryLabels: Record<string, { label: string; icon: string }> = {
  authority: { label: "Website Authority", icon: "⚡" },
  content: { label: "Content AI-Readiness", icon: "📝" },
  technical: { label: "Technical Signals", icon: "🔧" },
  presence: { label: "Online Presence", icon: "🌐" },
};

export function ScoreBreakdown({
  breakdown,
}: {
  breakdown: ScoreBreakdownType;
}) {
  const categories = Object.entries(breakdown) as [
    keyof ScoreBreakdownType,
    ScoreBreakdownType[keyof ScoreBreakdownType],
  ][];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map(([key, category]) => {
        const meta = categoryLabels[key];
        const percentage = Math.round((category.score / category.max) * 100);

        return (
          <div
            key={key}
            className="bg-card-bg border border-card-border rounded-xl p-5"
          >
            {/* Category header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{meta.icon}</span>
                <span className="text-sm font-semibold text-text-main">
                  {meta.label}
                </span>
              </div>
              <span className="text-sm font-bold text-primary">
                {category.score}/{category.max}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/5 rounded-full mb-4">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${percentage}%`,
                  backgroundColor:
                    percentage >= 70
                      ? "#22c55e"
                      : percentage >= 40
                        ? "#E07A5F"
                        : "#ef4444",
                }}
              />
            </div>

            {/* Detail items */}
            <div className="space-y-2">
              {category.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs"
                >
                  <span className="mt-0.5 flex-shrink-0">
                    {detail.passed ? "✅" : "❌"}
                  </span>
                  <div>
                    <span
                      className={
                        detail.passed ? "text-text-muted" : "text-text-dim"
                      }
                    >
                      {detail.label}
                    </span>
                    {detail.value && (
                      <span className="text-text-dim ml-1">
                        ({detail.value})
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
