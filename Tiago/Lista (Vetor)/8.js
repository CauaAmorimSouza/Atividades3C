let tarefasLimpeza = [];

function adicionarTarefa(tarefa) {
    tarefasLimpeza.push(tarefa);
}

for (let i = 1; i <= 4; i++) {
    let tarefa = prompt(`Ana, digite a tarefa de limpeza ${i}:`);
    adicionarTarefa(tarefa);
}

tarefasLimpeza.splice(2, 1);

tarefasLimpeza[1] = "limpar banheiro";

console.log("Tarefas de Limpeza Atualizadas:", tarefasLimpeza);
