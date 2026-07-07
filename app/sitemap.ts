import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const sections = [
    "",
    "#about",
    "#waterfall",
    "#rooms",
    "#experiences",
    "#gallery",
    "#location",
    "#reviews",
    "#booking",
  ];

  return sections.map((section) => ({
    url: `${baseUrl}${section}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: section === "" ? 1 : 0.8,
  }));
}