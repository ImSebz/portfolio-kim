import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "./data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} | Marketing & Brand Experiences`,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4eee5",
    theme_color: "#5a1718",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
