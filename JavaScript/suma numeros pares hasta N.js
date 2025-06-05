//Pide al usuario un número N. Luego, suma todos los números pares desde 1 hasta N. Muestra el total.
let N = parseInt(prompt("Introduce un número N: "));
let suma = 0;
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}
alert("La suma de los números pares hasta " + N + " es: " + suma);