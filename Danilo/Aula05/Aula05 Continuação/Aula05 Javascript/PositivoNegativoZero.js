function PositivoNegativoZero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }   
}
console.log(PositivoNegativoZero(0))