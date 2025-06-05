//Pide al usuario un número N. Imprime todos los números desde 1 hasta N. Si un número es divisible por 3, imprime "Fizz" en lugar del número. Si es divisible por 5, imprime "Buzz". Si es divisible por ambos (3 y 5), imprime "FizzBuzz".
let N = parseInt(prompt("Introduce un número: "));
for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}