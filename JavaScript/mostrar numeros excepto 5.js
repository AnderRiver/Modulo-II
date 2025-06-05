//Pide al usuario un número. Luego, muestra todos los números desde ese número hasta 0, pero salta (no muestres) el número 5 si está en la secuencia.
let numero = parseInt(prompt("Introduce un número: "));
for (let i = numero; i >= 0; i--) {
    if (i === 5) {
        continue;
    }
    alert("Número: " + i);
}