const pessoa = {
    nome: 'Maria',
    notas: [8, 7, 9, 10], 

    calcularMedia: function () {
        const somaNotas = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNotas / this.notas.length;
        return media.toFixed(2); 
    },

    classificarDesempenho: function () {
        const media = this.calcularMedia();

        if (media >= 9) {
            return 'Desempenho otimo';
        } else if (media >= 7.5 && media < 9) {
            return 'Bom desempenho';
        } else if (media >= 6 && media < 7.5) {
            return 'Desempenho normal';
        } else {
            return 'Desempenho ruim';
        }
    }
};  

console.log("========================");

const mediaCalculada = pessoa.calcularMedia();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);

console.log("========================");