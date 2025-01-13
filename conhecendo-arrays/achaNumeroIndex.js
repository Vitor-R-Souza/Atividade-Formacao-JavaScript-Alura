function achaNumeroIndex(alvo, lista){
    let posicao = -1;
    lista.forEach((element, index) => {
        if(element === alvo){
            posicao = index;
        }
    });

    console.log(`Posição do número ${alvo} é: ${posicao}`);
    
}

const listaNumeros = [10,20,30,40];

achaNumeroIndex(20,listaNumeros);