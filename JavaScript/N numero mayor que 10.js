//Pide al usuario un número N. Luego, pide N números uno por uno. Al final, muestra cuántos de esos números fueron mayores que 10.
let N = parseInt(prompt("Introduce cuantos numeros quieres verificar: "));
let contador = 0;
for (let i = 0; i < N; i++) {
    let numero = parseInt(prompt("Introduce un número: "));
    if (numero > 10) {
        contador++;
    }
}
alert("Cantidad de números mayores que 10: " + contador);