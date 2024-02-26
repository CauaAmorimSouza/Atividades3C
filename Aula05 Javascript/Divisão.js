function Divisão(numero1, numero2) {
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        return resultado;
    } else {
        return "Se ta loco em tentar dividir por zero meu quiridu?";
    }
}
console.log(Divisão(100, 10))