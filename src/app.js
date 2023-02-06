import { couleurConstruction, hexColorRegex, isHexColor, testImport } from "./modules/utils.js";
import Color, { generateElement, display } from "./modules/Color.js";
import * as convert from "color-convert";
import * as Notyf from "notyf";

//Il va donc falloir convertir des couleurs hexadécimales et couleurs HSL pour générer les couleurs et vice-versa pour
//afficher le code hex dans l’interface(à l’intérieur des rectangles)

// couleurConstruction("#FFFFFF");



const main = document.querySelector("main");
const body = document.querySelector("body");
const clic = document.querySelector("form");
const header = document.querySelector("header");
const codeCouleur = document.querySelector("input[type=text]")
//const notyf = new Notyf();
console.log(codeCouleur);
console.log(clic);

clic.addEventListener('submit', (e) => {
    e.preventDefault();
 //   header.classList.add("minimized");
    
    // chercher la valeur du premier élément enfant
    const input = e.target.firstElementChild.value;
    const test = isHexColor(input);
    console.log(test);
    
    if (test) {
        const palette = couleurConstruction(input);
        displayColor(palette);
        console.log(palette);
         palette.forEach(
            (hsl) => {
                let c = new Color(hsl);
                 c.display(main);
                 console.log(c);
            } 
        )
        return test;
    }

});

const displayColor = (palette) => {
  // on fait qu'il n'y ait plus rien dans le main
  main.innerHTML = "";
    header.classList.add("minimized");
    let paletteDebut = palette[0];
    paletteDebut = "#"+convert.hsl.hex(paletteDebut);
    let paletteFin = palette[9];
    paletteFin = "#" + convert.hsl.hex(paletteFin);
    let paletteMillieu = palette[5];
    paletteMillieu = "#" + convert.hsl.hex(paletteMillieu);
    body.style.background = `linear-gradient(-45deg, ${paletteDebut}, ${paletteMillieu},${paletteFin})`;

}

    /*    setInterval(() => {
            const palette = couleurConstruction(
            Math.floor(Math.random() * 16777215).toString(16)
            );
            palette.forEach((hsl) => {
            let c = new Color(hsl);
            c.display(main);
            });
        }, 500);
    } else {
        throw new Error(`${input} n'est  pas un code hexadécimal valide`)
    }
    return test;
}) */

/*main.addEventListener("click", (e) => {
    const color = e.target.closest(".color").dataset.color;
    if (color) {
        navigator.clipboard.writeText().then(notyf.success(`copied ${color} to clipboard`));

    } */

    /*const notyf = new Notyf();
const notification = notyf.success('Address updated. Click here to continue');
notification.on('click', ({target, event}) => {
  // target: the notification being clicked
  // event: the mouseevent
  window.location.href = '/';
});*/
    




