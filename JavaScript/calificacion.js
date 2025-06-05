//Pide una calificación numérica (0-10) con prompt(). Si la calificación es 7 o más, muestra "Aprobado". Si es menor, muestra "Reprobado".
let calificacion = prompt("Introduce una calificación (0-10): ");
if (calificacion >= 7 && calificacion <= 10) {
    alert("Aprobado");
}else if (calificacion < 0 || calificacion > 10) {
    alert("Calificación inválida");
}else {
    alert("Reprobado");
}