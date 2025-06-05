//Pide un número al usuario con prompt(). Usa un bucle for para mostrar la tabla de multiplicar de ese número del 1 al 10.
let num = Number(prompt("Introduce un número para ver su tabla de multiplicar: "));
for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(resultado);
}