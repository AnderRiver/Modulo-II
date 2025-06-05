//Pide un número al usuario con prompt(). Usa if-else if-else para determinar si el número es positivo, negativo o cero, y muestra el resultado.
let numero = prompt("Introduce un número: ");
if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}