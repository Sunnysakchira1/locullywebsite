"use client";

import { useState } from "react";

export function EmailGate({
  analysisId,
  brandName,
  industry,
  location,
}: {
  analysisId: string;
  brandName: string;
  industry: string;
  location: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/ai-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          analysisId,
          brandName,
          industry,
          location,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card-bg border border-primary/30 rounded-xl p-8 text-center">
        <div className="text-3xl mb-3">📧</div>
        <h3 className="text-lg font-semibold text-text-main mb-2">
          Check your inbox!
        </h3>
        <p className="text-text-muted text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="bg-card-bg border border-card-border rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="text-2xl mb-2">🔒</div>
        <h3 className="text-lg font-semibold text-text-main">
          See what AI actually says about you
        </h3>
        <p className="text-text-muted text-sm mt-2">
          We&apos;ll check ChatGPT, Gemini, and Perplexity for your brand and
          email you the full report.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-3 bg-white/5 border border-card-border rounded-lg text-text-main placeholder:text-text-dim text-sm focus:outline-none focus:border-primary transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Get Report"}
        </button>
      </form>

      {status === "error" && (
        <p className="text-red-400 text-xs mt-3 text-center">{message}</p>
      )}

      <p className="text-text-dim text-xs mt-4 text-center">
        No spam. Just your report + one follow-up.
      </p>
    </div>
  );
}
