import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key || url === "your_supabase_url_here") {
    return null;
  }

  if (!_supabase) {
    _supabase = createClient(url, key);
  }
  return _supabase;
}

export type Analysis = {
  id: string;
  brand_name: string;
  url: string;
  industry: string;
  location: string;
  score: number;
  breakdown: ScoreBreakdown;
  recommendations: string[];
  created_at: string;
};

export type ScoreBreakdown = {
  authority: { score: number; max: 25; details: SignalDetail[] };
  content: { score: number; max: 25; details: SignalDetail[] };
  technical: { score: number; max: 25; details: SignalDetail[] };
  presence: { score: number; max: 25; details: SignalDetail[] };
};

export type SignalDetail = {
  label: string;
  passed: boolean;
  value?: string;
};

export type Lead = {
  id: string;
  analysis_id: string;
  email: string;
  ai_report: AIReport | null;
  report_sent: boolean;
  created_at: string;
};

export type AIReport = {
  queries: string[];
  platforms: {
    name: string;
    results: {
      query: string;
      mentioned: boolean;
      position: number | null;
      competitors: string[];
      snippet: string;
    }[];
  }[];
  summary: {
    totalChecks: number;
    timesMentioned: number;
    topCompetitors: string[];
  };
};
