import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document(
  "Home: Main page configuration",
  "src:index.md",
  [
    {
      name: "logo",
      type: "file",
      description: "Logo of the site. It's applied to all pages.",
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    "content: markdown",
  ],
);

cms.collection(
  "pages: All pages of the site",
  "src:**/*.md",
  [
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    "content: markdown",
  ],
);

cms.upload("uploads: Uploaded files", "src:*{.jpg,.svg,.png}");

export default cms;
