"use client";

export function Recommendations({
  recommendations,
}: {
  recommendations: string[];
}) {
  if (recommendations.length === 0) return null;

  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-6">
      <h3 className="text-sm font-semibold text-text-main mb-4 flex items-center gap-2">
        <span>💡</span> Top Recommendations
      </h3>
      <div className="space-y-3">
        {recommendations.map((rec, i) => (
          <div key={i} className="flex gap-3 text-sm">
            <span className="text-primary font-bold flex-shrink-0">
              {i + 1}.
            </span>
            <span className="text-text-muted">{rec}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
