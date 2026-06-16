import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { routeTree } from "@/routeTree.gen";

const BASE_URL = "https://amanet-ba.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

function collectPaths(): string[] {
  const paths = new Set<string>();
  const walk = (node: any) => {
    if (!node) return;
    const full = node.fullPath ?? node.path;
    if (typeof full === "string" && full.length > 0) {
      if (
        !full.includes("$") &&
        !full.includes("*") &&
        !full.startsWith("/api") &&
        !full.includes("sitemap") &&
        !full.includes("not-found") &&
        !full.startsWith("/lovable")
      ) {
        const clean = full === "/" ? "/" : full.replace(/\/$/, "");
        paths.add(clean);
      }
    }
    const children = node.children ? Object.values(node.children) : [];
    for (const child of children) walk(child);
  };
  walk(routeTree as any);
  if (paths.size === 0) paths.add("/");
  return Array.from(paths);
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = collectPaths().map((path) => ({
          path,
          changefreq: path === "/" ? "weekly" : "monthly",
          priority: path === "/" ? "1.0" : "0.7",
        }));

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path === "/" ? "" : e.path}/</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
