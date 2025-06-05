//Pide al usuario un número del 1 al 7 con prompt(). Usa una estructura switch para mostrar el día de la semana correspondiente (1 para Lunes, 2 para Martes, etc.).
let dia = prompt("Introduce un número del 1 al 7 para el día de la semana: ");
switch (dia) {
    case '1':
        alert("Lunes");
        break;
    case '2':
        alert("Martes");
        break;
    case '3':
        alert("Miércoles");
        break;
    case '4':
        alert("Jueves");
        break;
    case '5':
        alert("Viernes");
        break;
    case '6':
        alert("Sábado");
        break;
    case '7':
        alert("Domingo");
        break;
    default:
        alert("Número inválido. Por favor, introduce un número del 1 al 7.");
}



