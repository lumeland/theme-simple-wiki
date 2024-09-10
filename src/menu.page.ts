export const renderOrder = 1;

export default function* ({ nav, languages }: Lume.Data) {
  if (!languages.length) {
    const menu = nav.menu(
      "/",
      `hide_menu!=true`,
      "order=asc basename=asc-locale",
    )?.children ||
      [];

    yield {
      url: `/menu.json`,
      content: JSON.stringify(menu, null, 2),
    };
    return;
  }

  for (const lang of languages) {
    const baseUrl = lang === languages[0] ? "/" : `/${lang}`;

    const menu = nav.menu(
      baseUrl,
      `lang=${lang} hide_menu!=true`,
      "order=asc basename=asc-locale",
    )?.children ||
      [];

    yield {
      url: `/menu-${lang}.json`,
      content: JSON.stringify(menu, null, 2),
    };
  }
}
