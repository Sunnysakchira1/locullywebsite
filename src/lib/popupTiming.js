/**
 * Sitewide popup timing.
 *
 * The rule (set 2026-08-14): the WhatsApp widget appears once the visitor has
 * spent a few seconds on the page, and the AI Search Statistics lead magnet
 * follows no sooner than 7s after it — so the two never stack on top of each
 * other and the second one doesn't land before the first has been read.
 *
 * Both timers start on mount, so the lead-magnet delay is derived from the
 * WhatsApp delay rather than hardcoded. Change WHATSAPP_DELAY_MS and the gap
 * is preserved automatically.
 */
export const WHATSAPP_DELAY_MS = 5000;

/** Minimum gap between the WhatsApp widget and the lead-magnet popup. */
export const POPUP_GAP_MS = 7000;

export const LEAD_MAGNET_DELAY_MS = WHATSAPP_DELAY_MS + POPUP_GAP_MS;
