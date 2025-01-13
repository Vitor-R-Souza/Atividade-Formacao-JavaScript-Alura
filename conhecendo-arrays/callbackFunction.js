function executaOperacaoEmArray(lista, callbackFunction){
    return lista.map(callbackFunction);
}

function numeroDobrado(num){
    return num * 2;
}

const numeros = [2,5];
const dobrados = executaOperacaoEmArray(numeros, numeroDobrado);

console.log(dobrados);
