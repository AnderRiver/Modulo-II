//Pide al usuario una frase. Cuenta y muestra cuántas veces aparece la letra 'a' (mayúscula o minúscula) en la frase.
let frase = prompt("Introduce una frase:");
let contador = 0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        contador++;
    }
}
alert("La letra 'a' aparece " + contador + " veces en la frase.");