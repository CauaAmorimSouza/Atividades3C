let nota, media, resultado, cont = 0, acumula = 0
while(cont <3){
    nota = Number(prompt("Digite um nº"))
    acumula += nota
    cont++
}
media = acumula / 3
alert(resultado = media >= 7 ? "APROVADO!!!" : media >= 3 ? "RECUPERAÇÃO" : "REPROVADO")
