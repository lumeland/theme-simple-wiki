import postcss from "lume/plugins/postcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import nav from "lume/plugins/nav.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.7.0/title.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.0/toc.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.0/footnotes.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";
import basePath from "lume/plugins/base_path.ts";

import "lume/types.ts";

export default function () {
  return (site: Lume.Site) => {
    site.use(nav());
    site.use(title());
    site.use(toc());
    site.use(footnotes());
    site.use(postcss());
    site.use(pagefind());
    site.use(prism());
    site.use(resolveUrls());
    site.use(date());
    site.use(basePath());
    site.data("layout", "layout.vto");
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

    // Basic CSS Design System
    site.remoteFile(
      "_includes/css/ds.css",
      "https://unpkg.com/@lumeland/ds@0.3.3/ds.css",
    );
  };
}
