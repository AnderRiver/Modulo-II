//Pide al usuario un nombre y una edad con prompt(). Si el nombre es "Ana" Y la edad es mayor a 20, muestra "Bienvenida Ana". Si solo el nombre es "Ana" pero la edad no cumple, muestra "Hola Ana, pero no cumples la edad". Si el nombre no es "Ana", muestra "Usuario no reconocido".
let name = prompt("Introduce tu nombre: ");
let nombre = name.toLowerCase(); // Convertir a minúsculas para comparación
if (nombre === "ana") {
    let edad = parseInt(prompt("Introduce tu edad: "));
    if (edad == 20) {
        alert("Bienvenida ana");
    } else {
        alert("Hola ana, pero no cumples la edad");
    }
} else {
    alert("Usuario no reconocido");
}