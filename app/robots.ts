import type { MetadataRoute } from "next";
import { AUREN_URL } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${AUREN_URL}/sitemap.xml` };
}
