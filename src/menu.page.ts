export const url = "/menu.json";

export default function* ({ nav, languages }: Lume.Data) {
  for (const lang of languages) {
    const menu =
      nav.menu("/", `lang=${lang}`, "order=asc basename=asc").children;

    yield {
      url: `/menu-${lang}.json`,
      content: JSON.stringify(menu, null, 2),
    };
  }
}
