function retornaPar(lista){
    console.log('os numeros pares são:');

    for (let i = 0; i < lista.length; i++) {
        if (numeros[i] % 2 === 0) {
          console.log(numeros[i]);
        }
    }
}

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

retornaPar(numeros);