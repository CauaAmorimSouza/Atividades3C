/// Exemplo de for...in loo para iterar sobre as propriedades de um objeto
const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj){
    console.log(prop + ': ' + obj[prop]);
}