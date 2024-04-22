function CalcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}
console.log(CalcularFatorial(120))