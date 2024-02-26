function MaiorNúmero(numero1, numero2, numero3) {
    let maior = numero1;
    if (numero2 > maior) {
        maior = numero2;
    }
    if (numero3 > maior) {
        maior = numero3;
    }
    return maior;
}
console.log(MaiorNúmero(5, 10, 6))