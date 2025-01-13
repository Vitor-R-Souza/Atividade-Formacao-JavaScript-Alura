function listaElemento(lista){
    for(let item of lista){
        console.log(`o item da posição ${lista.indexOf(item)} da lista é: ${item}`);
    }
}

const meuArray = [200,10,540,22,14,30,50];

listaElemento(meuArray);