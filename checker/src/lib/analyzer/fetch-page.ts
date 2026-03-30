export type FetchedPage = {
  html: string;
  statusCode: number;
  redirectUrl: string | null;
  loadTimeMs: number;
  headers: Record<string, string>;
};

export async function fetchPage(url: string): Promise<FetchedPage> {
  const normalizedUrl = url.startsWith("http") ? url : `https://${url}`;
  const start = Date.now();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(normalizedUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; LocullyChecker/1.0; +https://locully.org)",
      },
      redirect: "follow",
    });

    const html = await res.text();
    const loadTimeMs = Date.now() - start;

    const headers: Record<string, string> = {};
    res.headers.forEach((value, key) => {
      headers[key] = value;
    });

    return {
      html,
      statusCode: res.status,
      redirectUrl: res.redirected ? res.url : null,
      loadTimeMs,
      headers,
    };
  } finally {
    clearTimeout(timeout);
  }
}
