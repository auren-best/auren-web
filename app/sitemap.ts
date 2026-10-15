import type { MetadataRoute } from "next";
import { AUREN_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((p) => ({ url: `${AUREN_URL}${p}` }));
}
