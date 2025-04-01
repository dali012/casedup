import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casedup.store";

  // Define the routes
  const routePaths = [
    "",
    "/contact",
    "/configure/upload",
    "/terms",
    "/privacy-policy",
    "/cookie-policy",
  ];

  // Map routes to sitemap entries with proper typing
  const routes: MetadataRoute.Sitemap = routePaths.map((route) => {
    // Determine the appropriate values
    let frequency: "daily" | "weekly" | "monthly";
    let priority: number;

    if (route === "") {
      frequency = "daily";
      priority = 1.0;
    } else if (route.includes("configure")) {
      frequency = "weekly";
      priority = 0.9;
    } else if (route.includes("terms") || route.includes("policy")) {
      frequency = "monthly";
      priority = 0.7;
    } else {
      frequency = "weekly";
      priority = 0.8;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: frequency,
      priority,
    };
  });

  return routes;
}
