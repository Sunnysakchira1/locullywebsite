import { NextRequest, NextResponse } from "next/server";
import { runAnalysis } from "@/lib/analyzer/scoring";
import { getSupabase } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url, brandName, industry, location } = body;

    if (!url || !brandName || !industry || !location) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Run the analysis
    const result = await runAnalysis({ url, brandName, industry, location });

    // Store in database
    let analysisId = crypto.randomUUID();

    const db = getSupabase();
    if (db) {
      const { data, error } = await db
        .from("analyses")
        .insert({
          brand_name: brandName,
          url,
          industry,
          location,
          score: result.score,
          breakdown: result.breakdown,
          recommendations: result.recommendations,
        })
        .select("id")
        .single();

      if (data) {
        analysisId = data.id;
      }
      if (error) {
        console.error("[DB] Insert error:", error);
      }
    }

    return NextResponse.json({
      id: analysisId,
      score: result.score,
      breakdown: result.breakdown,
      recommendations: result.recommendations,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Analysis failed";
    console.error("[Analyze] Error:", message);
    return NextResponse.json(
      { error: "Failed to analyze website. Please check the URL and try again." },
      { status: 500 }
    );
  }
}
