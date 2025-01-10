# Simple Wiki

[Lume](https://lume.land) theme to create a simple wiki.

- Use markdown to save the pages
- Instant search engine.

## Install as remote theme

The **fastest and easiest** way to use this theme is by importing it as a remote
module. It allows to create a blog in seconds and update it at any time just
changing the version number in the import url. Just add the following code to
your `_config.ts` file:

```ts
import lume from "lume/mod.ts";
import wiki from "https://deno.land/x/lume_theme_simple_wiki@v0.1.0/mod.ts";

const site = lume();

site.use(wiki());

export default site;
```

### Multilanguage support

Use the `languages` option to configure a multilanguage site:

```ts
site.use(wiki({
  languages: ["en", "gl", "es"],
}));
```

You can see an example in the [demo](./demo) folder. To customize it copy the
[`_data.yml`](./src/_data.yml) file in your blog root folder and edit it with
your own data.

## Use it as base template

To use this theme as a base template for a more customized blog, clone this repo
and edit the [_config.ts](./_config.ts) file. The source files are in the
[src](./src/) folder. And you can remove the `/demo` folder.

## Available options

### Edit `/src/_data.yml`

Set options in your `/src/_data.yml`, such as, add extra links to the bottom of
the sidebar menu:

```
menu_links: 
  - text: <strong>MyCo</strong>
    href: https://example.com
    icon: building-office
  - text: GitHub repository
    href: https://github.com/me/therepo
    icon: github-logo
```

Add additional script or css calls to your `<head>`, such as Fathom Analytics:

```
extra_head: |
  <!-- Fathom Analytics -->
    <script src="https://cdn.usefathom.com/script.js" data-site="A1B2C3D4" defer></script>
  <!-- / Fathom -->
```

Set the repository, which will cause an "Edit This Page" link to appear in the
footer:

```
repo: [https://github.com/me/therepo](https://github.com/me/therepo)
```

### Use lume cms

You can also edit the above settings via [lume cms](https://lume.land/cms/) (run
`deno task lume cms`), which is now included with simple-wiki. See the
[relevant config section](https://github.com/lumeland/theme-simple-wiki/blob/main/_cms.ts#L18-L60)
in the wiki's `_cms.ts`.

### In Markdown Content

In your markdown content files,
[use Github-style "callout" codes](https://github.com/orgs/community/discussions/16925)
to call attention to asides in your text.

```
> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

Set edit to false in page frontmatter, to suppress the "Edit this Page" link:

```
---
title: My Cool Page
...
edit: false
...
---
# The main topic
Lorem ipsum...
```
