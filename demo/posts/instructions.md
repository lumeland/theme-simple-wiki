# How to install this theme

**Simple wiki** is a clean and minimal wiki theme for Lume. It allows to build your own wiki or documentation site **in seconds**.

<!--more-->

To use it, just import the theme in your `_config.ts` file:

```js
import lume from "lume";
import wiki from "https://deno.land/x/lume_theme_simple_wiki/mod.ts";

const site = lume();
site.use(wiki());

export default site;
```
