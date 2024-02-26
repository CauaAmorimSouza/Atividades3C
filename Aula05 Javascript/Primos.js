function Primos(numero) {
    if (numero < 2) {
        return "Este número NÃO é PRIMO";
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "Este número NÃO é PRIMO";
        }
    }
    return "Este número é PRIMO SIM";
}
console.log(Primos(2))