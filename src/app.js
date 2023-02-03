import { couleurConstruction, hexColorRegex, isHexColor, testImport } from "./modules/utils.js";
import Color, { generateElement, display } from "./modules/Color.js";

//Il va donc falloir convertir des couleurs hexadécimales et couleurs HSL pour générer les couleurs et vice-versa pour
//afficher le code hex dans l’interface(à l’intérieur des rectangles)

// couleurConstruction("#FFFFFF");



const main = document.querySelector("main");
const clic = document.querySelector("form");
const codeCouleur = document.querySelector("input[type=text]")
console.log(codeCouleur);
console.log(clic);

clic.addEventListener('submit', (e) => {
    e.preventDefault();
    // chercher la valeur du premier élément enfant
    const input = e.target.firstElementChild.value;

    const test = isHexColor(input);
    console.log(test);
    if (test === true) {
        e.preventDefault;
        const palette = couleurConstruction(input);
        console.log(palette);
        let myColor = new Color(input);
        myColor.display(main);
    
    } else {
        throw new Error(`${input} n'est  pas un code hexadécimal valide`)
    }
    return test;
});