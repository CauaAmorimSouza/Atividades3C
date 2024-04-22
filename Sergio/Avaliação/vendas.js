// Diogo d. S Pastor e Cauã Amorim Souza

// Array com os produtos
var produtos = [
    { nome: 'caneta', preco: 5.25, qtdEstoque: 27, vendas: [] },
    { nome: 'lápis', preco: 2.99, qtdEstoque: 53, vendas: [] },
    { nome: 'borracha', preco: 3.99, qtdEstoque: 60, vendas: [] },
    { nome: 'régua', preco: 5.50, qtdEstoque: 33, vendas: [] },
    { nome: 'caderno', preco: 15.90, qtdEstoque: 28, vendas: [] },
    { nome: 'lapiseira', preco: 22.59, qtdEstoque: 15, vendas: [] }
];

// Função realizar vendas
function realizarVenda(qtdVendida, produtoVendido) {
    var produto = produtos.find(p => p.nome === produtoVendido);
    if (produto) {
        if (produto.qtdEstoque >= qtdVendida) {
            produto.qtdEstoque -= qtdVendida;
            produto.vendas.push({ quantidade: qtdVendida, data: new Date() }); // Adiciona a venda com a data atual
            console.log("Quantidade em estoque após venda:", produto.qtdEstoque);
            exibirResultado(`Venda realizada com sucesso! Quantidade em estoque de ${produto.nome}: ${produto.qtdEstoque}`);
        } else {
            console.log("Quantidade insuficiente em estoque.");
            exibirResultado(`CABOU! estamos sem ${produto.nome}. `);
        }
    } else {
        console.log("Produto não encontrado.");
        exibirResultado(`Erro ao realizar venda. Produto não encontrado.`);
    }
}

// Adicionar novo produto ao estoque
function adicionarNovoProduto(nomeProduto, precoNovo, qtd) {
    var produtoExistente = produtos.find(p => p.nome === nomeProduto);
    if (produtoExistente) {
        alert("Este item já está listado no inventário.");
    } else {
        produtos.push({ nome: nomeProduto, preco: precoNovo, qtdEstoque: qtd, vendas: [] });
        console.log("Novo produto adicionado ao estoque:", nomeProduto);
        exibirResultado(`Novo produto "${nomeProduto}" adicionado ao estoque.`);
    }
}

// Função para gerar o relatório de vendas do dia
function imprimirRelatorioVendasDoDia() {
    var relatorio = "Relatório de vendas do dia:\n";

    // Obtemos a data de hoje
    var hoje = new Date().toLocaleDateString();

    // Repetimos os produtos
    produtos.forEach(produto => {
        relatorio += `\nProduto: ${produto.nome}\nVendas:\n`;

        // vendas do dia 
        var vendasDoDia = produto.vendas.filter(venda => venda.data.toLocaleDateString() === hoje);

        // Exibir vendas do dia
        vendasDoDia.forEach(venda => {
            relatorio += `- Data: ${venda.data.toLocaleDateString()}, Quantidade: ${venda.quantidade}\n`;
        });
    });

    alert(relatorio);
}

// Exibir resultados NA PÁGINA
function exibirResultado(mensagem) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerText = mensagem;
}
