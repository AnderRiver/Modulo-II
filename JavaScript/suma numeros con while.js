//Pide al usuario un número con prompt(). Usa un bucle while para sumar todos los números desde 1 hasta el número ingresado y muestra el total.
let num = Number(prompt("Introduce un número: "));
let suma = 0;
let i = 1;
while (i <= num) {
    suma += i;
    i++;
}
console.log("La suma de los números desde 1 hasta " + num + " es: " + suma);