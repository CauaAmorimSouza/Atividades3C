function contarPalavras(frase) {
    frase = frase.trim();
    if (frase === "") {
        return 0;
    }
    var palavras = frase.split(" ");
    return palavras.length;
}
var fraseExemplo = "Esta é uma frase de exemplo";
var numeroDePalavras = contarPalavras(fraseExemplo);
console.log("Número de palavras: " + numeroDePalavras);
