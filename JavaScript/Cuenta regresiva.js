//Pide un número al usuario con prompt(). Usa un bucle for para hacer una cuenta regresiva desde ese número hasta 0 y muestra cada número.
let num = Number(prompt("Introduce un número para la cuenta regresiva: "));
for (let i = num; i >= 0; i--) {
    console.log(i);
}