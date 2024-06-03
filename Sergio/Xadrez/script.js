let casa, quebra_linha
let tabuleiro = new Array(8)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}
for(let i = 0; i < tabuleiro.length; i++){
    
    quebra_linha = document.createElement('br')
    document.body.append(quebra_linha)

    for(let j = 0; j < tabuleiro[i].length; j++){
        //console.log(`tab ${i} ${j}`)
        casa = document.createElement('button')
        casa.setAttribute('id', 'cs' + i + '' + j)
        casa.setAttribute('class',  'csjogo' + i)
        casa.setAttribute('type', 'button')
        if(i % 2){
            if(j % 2){
                casa.setAttribute('class', 'Casa1')
            }else
            casa.setAttribute('class', 'Casa2')
        }
        else{
            if(j % 2){
            casa.setAttribute('class', 'Casa2')
            }else
            casa.setAttribute('class', 'Casa1')
        }
        
        document.body.append(casa)
    }
    
}