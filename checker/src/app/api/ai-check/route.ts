import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, analysisId, brandName, industry, location } = body;

    if (!email || !analysisId) {
      return NextResponse.json(
        { error: "Email and analysis ID are required" },
        { status: 400 }
      );
    }

    // Store lead
    const db = getSupabase();
    if (db) {
      const { error } = await db.from("leads").insert({
        analysis_id: analysisId,
        email,
      });

      if (error) {
        console.error("[DB] Lead insert error:", error);
      }
    }

    // TODO Phase 2: Queue background job to run AI checks
    // For now, log the request
    console.log("[AI Check] Queued for:", {
      email,
      analysisId,
      brandName,
      industry,
      location,
    });

    // Phase 2 will:
    // 1. Generate queries based on industry + location
    // 2. Call OpenAI, Gemini, Perplexity APIs
    // 3. Parse responses for brand mentions
    // 4. Generate HTML report
    // 5. Send via Resend

    return NextResponse.json({
      success: true,
      message:
        "Your AI visibility report is being generated. Check your email in 2-5 minutes.",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Request failed";
    console.error("[AI Check] Error:", message);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
