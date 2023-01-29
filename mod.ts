import plugins from "./plugins.ts";

import type { Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    // Configure the site
    site.use(plugins());

    // Add remote files
    const files = [
      "_includes/css/menu.css",
      "_includes/css/updates.css",
      "_includes/styles.css",
      "_includes/templates/breadcrumb.njk",
      "_includes/layout.njk",
      "_includes/templates/menu_item.njk",
      "_includes/templates/menu.njk",
      "404.md",
      "index.md",
      "styles.css",
      "favicon.png",
    ];

    for (const file of files) {
      site.remoteFile(file, import.meta.resolve(`./src/${file}`));
    }
  };
}
