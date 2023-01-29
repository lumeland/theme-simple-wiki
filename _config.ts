import lume from "lume/mod.ts";
import notes from "./mod.ts";

const site = lume({
  src: "./src",
});
site.use(notes());

export default site;
