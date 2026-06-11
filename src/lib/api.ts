import { getValidateHeader } from "./validateHeader";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function serverFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  nextOptions: { revalidate?: number; cache?: "force-cache" | "no-store" } = {},
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "toursafaq-auth": getValidateHeader(),
      ...options.headers,
    },
    // ✅ Use Next.js cache/revalidate options
    next: nextOptions,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message || "API Error");
  }

  return res.json();
}
