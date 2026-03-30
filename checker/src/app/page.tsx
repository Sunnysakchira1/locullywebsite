"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const industries = [
  "Healthcare / Clinic",
  "Dental",
  "Physiotherapy",
  "Dermatology / Aesthetics",
  "IVF / Fertility",
  "Veterinary",
  "Restaurant / F&B",
  "Hotel / Hospitality",
  "Real Estate",
  "Legal Services",
  "Fitness / Gym",
  "Spa / Wellness",
  "Education",
  "Accounting / Finance",
  "Other",
];

export default function HomePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    brandName: "",
    url: "",
    industry: "",
    location: "",
  });
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setStatus("idle");
        return;
      }

      // Store results in sessionStorage for the results page
      sessionStorage.setItem(
        `analysis-${data.id}`,
        JSON.stringify({
          ...data,
          brandName: form.brandName,
          url: form.url,
          industry: form.industry,
          location: form.location,
        })
      );

      router.push(`/results/${data.id}`);
    } catch {
      setError("Network error. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div className="text-lg font-bold tracking-wider text-text-main">
          LOCULLY
        </div>
        <a
          href="https://locully.org"
          className="text-xs text-text-dim hover:text-primary transition-colors"
        >
          locully.org
        </a>
      </header>

      {/* Hero */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="max-w-2xl w-full">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Free AI Visibility Check
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-4">
            Is AI recommending{" "}
            <span className="text-primary">your brand?</span>
          </h1>

          <p className="text-text-muted text-center text-lg mb-10 max-w-lg mx-auto">
            Find out if ChatGPT, Gemini, and Perplexity know about your
            business. Get your AI Visibility Score in seconds.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-text-dim mb-1.5 font-medium">
                  Brand / Business Name
                </label>
                <input
                  type="text"
                  value={form.brandName}
                  onChange={(e) =>
                    setForm({ ...form, brandName: e.target.value })
                  }
                  placeholder="e.g. Form Recovery & Wellness"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-text-main placeholder:text-text-dim text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-text-dim mb-1.5 font-medium">
                  Website URL
                </label>
                <input
                  type="text"
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  placeholder="e.g. formrecovery.co.th"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-text-main placeholder:text-text-dim text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-text-dim mb-1.5 font-medium">
                  Industry
                </label>
                <select
                  value={form.industry}
                  onChange={(e) =>
                    setForm({ ...form, industry: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-text-main text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="" className="bg-background">
                    Select your industry
                  </option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind} className="bg-background">
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-text-dim mb-1.5 font-medium">
                  City / Location
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  placeholder="e.g. Bangkok"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-card-border rounded-lg text-text-main placeholder:text-text-dim text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 text-base"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Analyzing your website...
                </span>
              ) : (
                "Check My AI Visibility"
              )}
            </button>
          </form>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 mt-8 text-text-dim text-xs">
            <span>No signup required</span>
            <span className="w-1 h-1 bg-text-dim rounded-full" />
            <span>Results in seconds</span>
            <span className="w-1 h-1 bg-text-dim rounded-full" />
            <span>100% free</span>
          </div>
        </div>
      </div>
    </main>
  );
}
