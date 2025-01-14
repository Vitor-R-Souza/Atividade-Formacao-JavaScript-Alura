function retornaPares(lista){
    return lista.filter(num => num % 2 === 0);
}

const numArray = [1, 2, 3, 4, 5, 6];

const numerosPares = retornaPares(numArray);

console.log(numerosPares);
