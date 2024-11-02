var foraV = 'Fora 1';
let foraL = 'fora 2';

if(true){
    var dentroV = 'dentro 1';
    console.log(foraV); // funciona
    console.log(dentroV); // funciona
}

console.log(foraV); // funciona
console.log(dentroV); // funciona

if(true){
    let dentroL = 'dentro 2';
    console.log(foraL); // funciona
    console.log(dentroL); // funciona
}

console.log(foraL); // funciona
console.log(dentroL); // não definido