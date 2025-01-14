const valores = [10, 20, 30, 40, 50];

const total = valores.reduce((soma,valorAtual) => soma + valorAtual, 0);

console.log('a soma de todos os valores é:', total);
