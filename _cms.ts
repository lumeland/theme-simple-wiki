import lumeCms from "lume/deps/cms.ts";

const cms = lumeCms();

cms.collection("pages", "src:**/*.md", [
  "content: markdown",
]);

cms.upload("uploads", "src:**/*.{jpg,jpeg,png,webp,svg,mp4,webm,gif}");

export default cms;
