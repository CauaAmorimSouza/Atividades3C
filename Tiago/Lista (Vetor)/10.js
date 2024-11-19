let numeros = [12, 34, 45, 67, 23, 45, 89, 23, 45, 78];

let numeroVerificar = prompt("Digite o número que deseja verificar se existe no vetor:");

numeroVerificar = Number(numeroVerificar);

let indicesEncontrados = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroVerificar) {
        indicesEncontrados.push(i); 
    }
}

if (indicesEncontrados.length > 0) {
    console.log(`O número ${numeroVerificar} foi encontrado nos índices: ${indicesEncontrados}`);
} else {
    console.log(`O número ${numeroVerificar} não foi encontrado no vetor.`);
}
