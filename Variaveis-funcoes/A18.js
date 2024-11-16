function verificaIdade(idade,nome){
    if(idade >= 18){
        return `${nome} é maior de idade`;
    }else{
        return `${nome} é menor de idade`;
    }
}

let idade1 = 20;
let idade2 = 15;

console.log(verificaIdade(idade1,'Vitor'));
console.log(verificaIdade(idade2,'carlos'));

