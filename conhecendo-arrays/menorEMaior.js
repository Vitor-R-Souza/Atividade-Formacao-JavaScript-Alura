function achaMenorEMaior(lista){
    let maior = 0;
    let menor;
    lista.forEach(element => {
        if(element > maior){
            maior = element;
        }
        if(element < menor || menor === undefined){
            menor = element;
        }
    });

    console.log(`o menor número é ${menor} e o maior número é ${maior}`);
    
}

const listaNumeros = [10,20,1];

achaMenorEMaior(listaNumeros);