import postcss from "lume/plugins/postcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import nav from "lume/plugins/nav.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.4.0/title.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.4.0/toc.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";
import basePath from "lume/plugins/base_path.ts";
import vento from "lume/plugins/vento.ts";

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
    site.use(basePath());
    site.data("layout", "layout.vto");
    site.data("date", "Git Last Modified");
    site.use(vento());
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
