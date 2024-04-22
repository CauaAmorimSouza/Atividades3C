let nota, media, resultado, cont = 0, acumula = 0
while(cont <3){
    nota = Number(prompt("Digite um nº"))
    acumula += nota
    cont++
}
media = acumula / 3
if(media >=7.0){
    resultado = "APROVADO"
}else{
    if(media >= 3){
        resultado = "RECUPERAÇÃO"
    }else{
        resultado = "REPROVADO"
    }
}
alert(resultado)