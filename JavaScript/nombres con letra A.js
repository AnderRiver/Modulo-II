//Pide al usuario un número N. Luego, pide N nombres. Al final, muestra solo los nombres que comienzan con la letra "A" (mayúscula o minúscula).
let N = parseInt(prompt("Introduce cantidad de nombres: "));
let nombres = [];
for (let i = 0; i < N; i++) {
    let nombre = prompt("Introduce un nombre:");
    nombres.push(nombre);
}
let nombresConA = nombres.filter(nombre => nombre.toLowerCase().startsWith("a"));
alert("Nombres que comienzan con 'A': " + nombresConA.join(", "));