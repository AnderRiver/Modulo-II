//Pide al usuario que ingrese números repetidamente hasta que ingrese el número 0. Por cada número ingresado (excepto el 0), indica si es positivo o negativo.
let numero = parseInt(prompt("Introduce un número (0 para terminar): "));
while (true) {
    if (numero > 0) {
        alert("El número " + numero + " es positivo.");
    } else if (numero === 0) {
        alert("Has terminado el programa.");
        break;
    } else {
        alert("El número " + numero + " es negativo.");
    }
    numero = parseInt(prompt("Introduce otro número (0 para terminar): "));
}