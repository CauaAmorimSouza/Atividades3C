let listaCompras = [];

function adicionarItem(item) {
    listaCompras.push(item);
}

for (let i = 1; i <= 3; i++) {
    let item = prompt(`Digite o item ${i} para adicionar à lista de compras:`);
    adicionarItem(item);
}

if (listaCompras[listaCompras.length - 1].toLowerCase() !== "leite") {
    adicionarItem("leite");
}

console.log("Lista de Compras:", listaCompras);
