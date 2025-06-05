//Pide al usuario que ingrese una contraseña con prompt(). Si la contraseña es "secreto123", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".
let contrasena = prompt("Introduce la contraseña: ");
if (contrasena === "secreto123") {
    alert("Acceso concedido.");
} else {
    alert("Acceso denegado.");
}