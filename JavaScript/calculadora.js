//Pide al usuario dos números y luego un operador (+, -, *, /) usando prompt(). Realiza la operación correspondiente y muestra el resultado. Usa condicionales para el operador.
let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
let operador = prompt("Introduce un operador (+, -, *, /): ");
let resultado;

if (operador === "+") {
    resultado = num1 + num2;
} else if (operador === "-") {
    resultado = num1 - num2;
} else if (operador === "*") {
    resultado = num1 * num2;
} else if (operador === "/") {
    resultado = num1 / num2;
} else {
    console.log("Operador no válido.");
}

if (resultado !== undefined) {
    console.log("El resultado es: " + resultado);
}