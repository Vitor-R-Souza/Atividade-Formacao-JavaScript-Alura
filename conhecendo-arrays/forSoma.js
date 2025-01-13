function somaArrayNumeros(lista){
    let total = 0;
    lista.forEach(element => {
        total = total + element;
    });
    console.log(`o total dos valores no array é: ${total}`);
}

const numeros = [1,2,3];

somaArrayNumeros(numeros);