import lume from "lume/mod.ts";
import notes from "../mod.ts";

const site = lume();
site.use(notes());

export default site;
