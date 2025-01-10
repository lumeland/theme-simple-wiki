import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document({
  name: "Settings",
  description: "Global settings for the site",
  store: "src:_data.yml",
  url: "/",
  fields: [
    {
      name: "logo",
      type: "file",
      description:
        "The logo of the site. If it's emtpy, the title will be used",
    },
    {
      name: "lang",
      type: "text",
      label: "Language",
      description: "The language of the site",
    },
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the <head> tag",
    },
    {
      name: "menu_links",
      type: "object-list",
      description: "Extra links to include in the main menu",
      fields: [
        {
          name: "text",
          type: "text",
          label: "Text",
        },
        {
          name: "href",
          type: "text",
          label: "URL",
        },
        {
          name: "icon",
          type: "text",
          label: "Icon",
          description:
            "<a href='https://phosphoricons.com/' target='_blank'>A Phosphor icon</a> name",
        },
      ],
    },
  ],
});

cms.collection(
  "pages: All pages of the site",
  "src:**/*.md",
  [
    {
      name: "extra_head",
      type: "code",
      description: "Extra content to include in the HEAD tag",
    },
    {
      name: "hide_menu",
      type: "checkbox",
      description: "Hide this page from the main menu",
    },
    "content: markdown",
  ],
);

cms.upload(
  "uploads: Uploaded files",
  "src:**/*{.jpg,.svg,.png,.gif,.mp3,.mp4,.pdf}",
);

export default cms;
