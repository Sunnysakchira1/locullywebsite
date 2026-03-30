"use client";

import { useEffect, useState } from "react";

export function ScoreGauge({ score }: { score: number }) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(score / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= score) {
        current = score;
        clearInterval(timer);
      }
      setDisplayScore(current);
    }, 30);
    return () => clearInterval(timer);
  }, [score]);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const progress = (displayScore / 100) * circumference;
  const offset = circumference - progress;

  const getColor = (s: number) => {
    if (s >= 70) return "#22c55e";
    if (s >= 40) return "#E07A5F";
    return "#ef4444";
  };

  const getLabel = (s: number) => {
    if (s >= 70) return "Strong";
    if (s >= 40) return "Moderate";
    return "Low";
  };

  const color = getColor(displayScore);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-56 h-56">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="12"
          />
          {/* Progress circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.1s ease" }}
          />
        </svg>
        {/* Score number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-5xl font-bold"
            style={{ color }}
          >
            {displayScore}
          </span>
          <span className="text-text-dim text-sm mt-1">out of 100</span>
        </div>
      </div>
      <div
        className="mt-4 text-lg font-semibold tracking-wide"
        style={{ color }}
      >
        {getLabel(score)} AI Visibility
      </div>
    </div>
  );
}
