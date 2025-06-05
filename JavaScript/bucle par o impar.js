//Pide números al usuario con prompt() dentro de un bucle while. Para cada número, indica si es par o impar. El bucle debe detenerse si el usuario ingresa "salir".
while (true) {
    let pal = prompt("Introduce un número (o 'salir' para terminar): ");
    let input = pal.toLowerCase();
    if (input === "salir") {
        console.log("Programa terminado.");
        break;
    }
    let num = Number(input);
    if (num % 2 === 0) {
        console.log("El número " + num + " es par.");
    } else {
        console.log("El número " + num + " es impar.");
    }
}