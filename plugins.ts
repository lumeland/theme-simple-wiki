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
import favicon, { Options as FaviconOptions } from "lume/plugins/favicon.ts";
import { alert } from "npm:@mdit/plugin-alert@0.8.0";

import "lume/types.ts";

export interface Options {
  /**
   * Options for the favicon plugin.
   */
  favicon?: FaviconOptions;
}

export default function (options: Options = {}) {
  return (site: Lume.Site) => {
    site.use(nav())
      .use(title())
      .use(toc())
      .use(footnotes())
      .use(postcss())
      .use(pagefind())
      .use(prism())
      .use(resolveUrls())
      .use(date())
      .use(favicon(options.favicon))
      .use(basePath())
      .data("layout", "layout.vto")
      .data("date", "Git Last Modified")
      .data("order", 0)
      .mergeKey("extra_head", "stringArray")
      .copy([
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
        ".svg",
        ".mp4",
        ".webm",
        ".gif",
      ]);

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);
  };
}
