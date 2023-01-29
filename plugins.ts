import postcss from "lume/plugins/postcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import nav from "https://raw.githubusercontent.com/lumeland/experimental-plugins/3d99f245fc46f64344116f14f175821ac329ed12/nav/mod.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.3.0/title.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.3.0/toc.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";

import type { Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    site.use(nav());
    site.use(title());
    site.use(toc());
    site.use(postcss());
    site.use(pagefind({
      binary: {
        version: "v0.10.7",
      },
    }));
    site.use(prism());
    site.use(resolveUrls());
    site.use(date());
    site.data("layout", "layout.njk");
    site.data("date", "Git Last Modified");
    site.copy([
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".svg",
      ".mp4",
      ".webm",
      ".gif",
    ]);
  };
}
