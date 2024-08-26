export const url = "/menu.json";

export default function ({ nav }: Lume.Data) {
  const menu = nav.menu("/", "", "order=asc basename=asc").children;

  return JSON.stringify(menu, null, 2);
}
