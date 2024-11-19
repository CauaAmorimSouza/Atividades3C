let tarefas = [];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
}

for (let i = 1; i <= 3; i++) {
    let tarefa = prompt(`Ana, digite a tarefa ${i}:`);
    adicionarTarefa(tarefa);
}

tarefas.splice(1, 1);

adicionarTarefa("ligar para o médico");

console.log("Lista de Tarefas Atualizada:", tarefas);
