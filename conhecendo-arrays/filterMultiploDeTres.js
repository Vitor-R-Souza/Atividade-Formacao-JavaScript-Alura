function filtraNumero(lista){
    return lista.filter(num => num % 3 === 0 && num > 5);
}

const listaNumeros = [3, 6, 9, 4, 12, 2, 7];

const listaFiltrada = filtraNumero(listaNumeros);

console.log(listaFiltrada);
