//Pide al usuario una frase con prompt(). Recorre la frase con un bucle for y cuenta cuántas vocales (a, e, i, o, u, ignorando mayúsculas/minúsculas) contiene. Muestra el total.
let frase = prompt("Introduce una frase: ");
let contadorVocales = 0;
let vocales = "aeiouAEIOU";
for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
        contadorVocales++;
    }
}
console.log("Total de vocales: " + contadorVocales);