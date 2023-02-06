// * pour importer tout ce qui est dans un module
import * as colorConvert from "color-convert";


export function couleurConstruction(hex) {

    const couleursHsl = [];
    // convertira hexadécimal en hsl
    const color = colorConvert.hex.hsl(hex);
    const h = color[0];
    const s = color[1];
    for (let i = 0; i <= 100; i += 10) {
        const newCouleur = [h, s, i]
        couleursHsl.push(newCouleur);
    }
    //console.log(couleursHsl);
    return couleursHsl;
  
}
// return true or false, test.(hex) return un true ou false autoamtiquement
export const isHexColor = (hex) => /^#[0-9A-F]{6}$/i.test(hex)

/*
export const hexColorRegex = (hex) => {
    const exp = new RegExp("^#[0-9a-fA-F]{6}$");
    return exp.test(hex);
} */




