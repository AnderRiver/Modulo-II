//Pide al usuario un número entre 1 y 10. Si el usuario ingresa un número fuera de ese rango, sigue pidiéndolo hasta que ingrese uno válido. Luego, muestra el número ingresado.
let numero = parseInt(prompt("Introduce un número entre 1 y 10: "));
while (numero < 1 || numero > 10) {
    alert("Número inválido. Debe estar entre 1 y 10.");
    numero = parseInt(prompt("Introduce un número entre 1 y 10: "));
}
alert("Su numero es: " + numero);