function juntaArray(...lista){
    return [].concat(...lista);
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const listaCompleta = juntaArray(arr1, arr2, arr3);

console.log(listaCompleta);
