//Simula un PIN de 3 intentos. Define un PIN secreto (ej: "1234"). Pide al usuario que ingrese el PIN. Si es incorrecto, le quedan menos intentos. Si acierta, "Acceso concedido". Si agota los 3 intentos, "Cuenta bloqueada".
let pinSecreto = "0707";
let intentos = 3;
let pinIngresado;
while (intentos > 0) {
    pinIngresado = prompt("Introduce el PIN(4 digitos):");
    if (pinIngresado === pinSecreto) {
        alert("Acceso concedido");
        break;
    } else {
        intentos--;
        alert("PIN incorrecto. Te quedan " + intentos + " intentos.");
    }
}
if (intentos === 0) {
    alert("Cuenta bloqueada");
}