customElements.define(
  "tree-menu",
  class extends HTMLElement {
    constructor() {
      super();
      const ul = document.createElement("ul");
      this.prepend(ul);
      this.loadMenu(ul);
    }

    render(menu, ul, url) {
      const fragment = document.createDocumentFragment();
      const baseUrl = new URL(
        this.dataset.base ?? "/",
        document.location.origin,
      );

      for (const { data, children, slug } of menu) {
        let li = document.createElement("li");
        fragment.appendChild(li);
        if (children) {
          li.innerHTML = `<details><summary></summary></details>`;
          li = li.querySelector("summary");
        }

        if (data.url) {
          const a = document.createElement("a");
          const href = new URL(`.${data.url}`, baseUrl).pathname;
          a.href = href;
          a.textContent = data.title || slug;

          if (href === url) {
            a.setAttribute("aria-current", "page");
          }
          li.appendChild(a);
        } else {
          li.innerHTML = `<strong>${data.title || slug}</strong>`;
        }

        if (children) {
          const ul = document.createElement("ul");
          li.parentElement.appendChild(ul);
          this.render(children, ul, url);
        }
      }

      ul.appendChild(fragment);
    }

    async loadMenu(ul) {
      const url = this.dataset.url;
      const response = await fetch(url);
      const data = await response.json();
      this.render(data, ul, decodeURIComponentSafe(location.pathname));
      const current = ul.querySelector("[aria-current]");

      if (current) {
        let parent = current.parentElement;

        while (parent) {
          if (parent.tagName === "DETAILS") {
            parent.open = true;
            parent = parent.parentElement.parentElement;
          } else {
            parent = parent.parentElement;
          }
        }
      }
    }
  },
);

function decodeURIComponentSafe(path) {
  return decodeURIComponent(path.replace(/%(?![0-9a-fA-F]+)/g, "%25"));
}
