import * as convert from "color-convert";

class Color {
  #hex;
  #hsl;
  #element;

  constructor(hsl) {
    this.#hsl = hsl;
    this.#hex = `#${convert.hsl.hex(hsl)}`;
    //console.log(`hsl : ${hsl}, hex ${this.#hex}`);
    this.#element = this.#generateElement();
  }

  #generateElement() {
    // crée un élément <div>
    const colorElement = document.createElement("div");
    colorElement.classList.add("color");
    colorElement.dataset.color = this.#hex;
    colorElement.style.backgroundColor = this.#hex;
    const textElement = document.createElement("p");
    textElement.textContent = this.#hex;
    textElement.style.color = this.#hsl[2] < 50 ? "#ffffff" : "#000000";
    colorElement.appendChild(textElement);
    return colorElement;
  }

  display(parentElement) {
    parentElement.appendChild(this.#element);
  }
}

export default Color;
