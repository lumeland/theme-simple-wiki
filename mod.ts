import plugins from "./plugins.ts";

import "lume/types.ts";
import type { Options } from "./plugins.ts";

export default function (options?: Options) {
  return (site: Lume.Site) => {
    // Configure the site
    site.use(plugins(options));

    // Add remote files
    const files = [
      "_includes/css/menu.css",
      "_includes/css/updates.css",
      "_includes/styles.css",
      "_includes/templates/breadcrumb.vto",
      "_includes/layout.vto",
      "_includes/templates/menu_item.vto",
      "_includes/templates/menu.vto",
      "menu.js",
      "menu.page.ts",
      "styles.css",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
