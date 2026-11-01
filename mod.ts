import lightningcss from "@lumeland/plugin-lightningcss";
import pagefind from "@lumeland/plugin-pagefind";
import resolveUrls from "@lumeland/plugin-resolve-urls";
import nav from "@lumeland/plugin-nav";

import toc from "@lumeland/plugin-toc";
import footnotes from "@lumeland/plugin-markdown-footnotes";
import prism from "@lumeland/plugin-prism";
import date from "@lumeland/plugin-date";
import basePath from "@lumeland/plugin-base-path";
import favicon, { Options as FaviconOptions } from "@lumeland/plugin-favicon";
import icons, { Options as IconOptions } from "@lumeland/plugin-icons";
import extractOrder from "@lumeland/plugin-extract-order";
import multilanguage from "@lumeland/plugin-multilanguage";
import { alert } from "@mdit/plugin-alert";
import { getFiles } from "@lumeland/core/utils/cdn.ts";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

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
    site
      .use(nav())
      .use(toc())
      .use(footnotes())
      .use(
        pagefind({
          componentUI: {
            placeholder: "/** pagefind */",
          },
        }),
      )
      .use(lightningcss())
      .use(prism())
      .use(resolveUrls())
      .use(date())
      .use(favicon(options.favicon))
      .use(basePath())
      .use(extractOrder())
      .use(lumeCms({ cms }))
      .data("languages", options.languages || [])
      .use(icons(options.icons))
      .data("layout", "layout.vto")
      .data("order", 0)
      .mergeKey("extra_head", "stringArray")
      .add("menu.js")
      .add("copy-code-button.js")
      // Extract page titles
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          const content = page.data.content as string;
          const match = content.trim().match(/^#\s+(.*)/);
          if (match) {
            page.data.title = match[1];
            page.data.content = content.slice(match[0].length).trimStart();
          }
        }
      })
      .process([".html"], (pages) => {
        pages.forEach((page) => {
          const document = page.document;
          document.querySelectorAll("pre > code").forEach((codeBlock: any) => {
            const pre = codeBlock.parentElement;
            pre?.classList.add("has-copy");
            const copyButton = document.createElement("copy-code-button");
            codeBlock.appendChild(copyButton);
          });
        });
      })
      .add([".css", ".jpg", ".jpeg", ".png", ".webp", ".svg", ".mp4", ".webm", ".gif"]);

    // Multilanguage site
    if (options.languages?.length) {
      site.use(
        multilanguage({
          languages: options.languages,
          defaultLanguage: options.languages[0],
        }),
      );

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

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

    // Remote files
    const files = ["_includes/**", "*.js", "styles.css"];
    site.remote("/", import.meta.resolve("./src"), files);
  };
}

export const setup: Lume.Archetype = async function* () {
  const specifier = import.meta.resolve("./src");
  const patterns = ["/favicon.svg", "/index.md", "/404.md", "/_data.yml"];

  for (const [path, url] of await getFiles(specifier, patterns)) {
    yield {
      path,
      overwrite: true,
      content: new URL(url),
    };
  }
};
