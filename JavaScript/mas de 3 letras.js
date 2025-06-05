//Pide al usuario 5 palabras. Al final, muestra cuántas de esas palabras tienen más de 3 letras.
let palabras = [];
for (let i = 0; i < 5; i++) {
    let palabra = prompt("Introduce una palabra:");
    palabras.push(palabra);
}
let contador = 0;
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 3) {
        contador++;
    }
}
alert("Cantidad de palabras con más de 3 letras: " + contador);