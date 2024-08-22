const fs = require("fs");
const path = require("path");

const domain = "https://shubhamprajapati528.netlify.app/";

// Example URLs for your website
const urls = [
  { loc: "", priority: 1.0 },
  { loc: "#about", priority: 0.8 },
  { loc: "#work", priority: 0.8 },
  { loc: "#project", priority: 0.7 },
  { loc: "#contact", priority: 0.6 },
];

// Generate the XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${domain + url.loc}</loc>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

// Write the sitemap to a file
fs.writeFileSync(path.join(__dirname, "sitemap.xml"), sitemap, "utf8");

console.log("Sitemap generated successfully!");
