//Pide al usuario que ingrese 3 artículos para una lista de compras usando prompt() dentro de un bucle for. Guarda cada artículo. Al final, muestra la lista completa.
let listaCompras = [];
for (let i = 0; i < 3; i++) {
    let articulo = prompt("Introduce un artículo para la lista de compras:");
    listaCompras.push(articulo);
}
alert("Lista de compras: " + listaCompras.join(", "));