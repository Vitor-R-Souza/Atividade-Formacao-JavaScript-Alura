function multiplicaPorTres(lista){
    lista.forEach(element => {
        let resultado = element *3;
        console.log(resultado);
    });
}

const numeros = [6, 9, 12, 15, 18, 21];

multiplicaPorTres(numeros);

const indexOf18 = numeros.findIndex(numero => numero === 18);

if (indexOf18 !== -1) {
  console.log(`O número 18 está no índice ${indexOf18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}