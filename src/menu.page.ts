export const url = "/menu.json";

export default function* ({ nav, languages }: Lume.Data) {
  for (const lang of languages) {
    const baseUrl = lang === languages[0] ? "/" : `/${lang}`;

    const menu = nav.menu(
      baseUrl,
      `lang=${lang} hide_menu!=true`,
      "order=asc basename=asc",
    )?.children ||
      [];

    yield {
      url: `/menu-${lang}.json`,
      content: JSON.stringify(menu, null, 2),
    };
  }
}
