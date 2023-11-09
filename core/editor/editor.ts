export class Editor {
  #value: string | null = `<p><br/></p>`;
  constructor(container: HTMLDivElement) {
    if (container) {
      if (!container.textContent) {
        this.#value = '';
      } else {
        this.#value = container.textContent;
      }
    }
  }

  setContent(value: string) {
    this.#value = value;
  }

  getContent() {
    if (!this.#value) {
      return '';
    }

    return this.#value;
  }

  test() {
    console.log(1);
    console.log(this.#value);
  }
}