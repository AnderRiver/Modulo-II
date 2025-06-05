//Define una palabra secreta (ej: "javascript"). Pide al usuario que ingrese palabras con prompt() dentro de un bucle while hasta que adivine la palabra secreta. Muestra un mensaje de felicitación al final.
let palabraSecreta = "panda";
let adivinado = false;
while (!adivinado) {
    let inte = prompt("Adivina la palabra secreta:");
    let intento = inte.toLowerCase();
    if (intento === palabraSecreta) {
        adivinado = true;
        console.log("¡Felicidades! Has adivinado la palabra secreta.");
    } else {
        console.log("Intenta de nuevo.");
    }
}