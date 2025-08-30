customElements.define(
  "copy-code-button",
  class extends HTMLElement {
    constructor() {
      super();
      this.icon =
        `<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>`;
      this.render();
    }

    render() {
      this.innerHTML =
        `<button type="button" title="Copy code">${this.icon}</button>`;
      this.button = this.querySelector("button");
      this.button.addEventListener("click", () => this.copyCode());
    }

    copyCode() {
      const codeBlock = this.parentNode.parentNode.querySelector("code");
      if (!codeBlock) return;
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        this.button.classList.add("copied");
        this.button.textContent = "Copied!";
        setTimeout(() => {
          this.button.classList.remove("copied");
          this.button.innerHTML = this.icon;
        }, 1200);
      });
    }
  },
);
