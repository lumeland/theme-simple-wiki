import postcss from "lume/plugins/postcss.ts";
import pagefind from "lume/plugins/pagefind.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import nav from "lume/plugins/nav.ts";
import title from "https://deno.land/x/lume_markdown_plugins@v0.9.0/title.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.9.0/toc.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.9.0/footnotes.ts";
import prism from "lume/plugins/prism.ts";
import date from "lume/plugins/date.ts";
import basePath from "lume/plugins/base_path.ts";
import favicon, { Options as FaviconOptions } from "lume/plugins/favicon.ts";
import phosphor, {
  Options as IconOptions,
} from "https://deno.land/x/lume_icon_plugins@v0.2.4/phosphor.ts";
import { alert } from "npm:@mdit/plugin-alert@0.16.0";
import multilanguage from "lume/plugins/multilanguage.ts";

import "lume/types.ts";

export interface Options {
  /**
   * Options for the favicon plugin.
   */
  favicon?: FaviconOptions;

  /**
   * Options for the phosphor plugin.
   */
  icons?: IconOptions;

  /**
   * Language options for the multilanguage plugin.
   * The first language is the default language.
   */
  languages?: string[];

  /**
   * Language names for the multilanguage plugin.
   * The key is the language code and the value is the language name.
   * This is used to display the language name in the language switcher.
   */
  languageNames?: Record<string, string>;
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
      .data("languages", options.languages || [])
      .use(phosphor({
        ...options.icons,
        name: "icon",
      }))
      .data("layout", "layout.vto")
      .data("order", 0)
      .mergeKey("extra_head", "stringArray")
      .add("menu.js")
      .add([
        ".css",
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
        ".svg",
        ".mp4",
        ".webm",
        ".gif",
      ]);

    // Multilanguage site
    if (options.languages?.length) {
      site.use(multilanguage({
        languages: options.languages,
        defaultLanguage: options.languages[0],
      }));

      const names = new Map<string, string>();
      options.languages.forEach((lang) => {
        if (options.languageNames?.[lang]) {
          names.set(lang, options.languageNames[lang]);
        } else {
          const dn = new Intl.DisplayNames(lang, { type: "language" });
          names.set(lang, dn.of(lang) || lang);
        }
      });
      site.filter("langName", (lang: string) => names.get(lang) || lang);
    }

    // Parse order (e.g., 01.page.md)
    site.parseBasename((name) => {
      const match = name.match(/(\d+)\.(.+)/);

      if (match) {
        const [, order, basename] = match;
        return {
          order: parseInt(order),
          basename,
        };
      }
    });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);
  };
}
