import type { MetadataRoute } from "next";

export default function sitemap (): MetadataRoute.Sitemap
{
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const routes = ["/", "/#about", "/#process", "/#impact", "/#twist"];

    const now = new Date();

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.6,
    }));
}


