const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Divisão por zero não é possivel.";
        }
    },
    calcularMedia: function(numeros) {
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        return soma / numeros.length;
    }
};

console.log("Soma: " + calculadora.soma(5, 10));
console.log("Subtração: " + calculadora.subtracao(8, 3));
console.log("Multiplicação: " + calculadora.multiplicacao(10, 2));
console.log("Divisão: " + calculadora.divisao(30, 2));
console.log("Divisão por zero: " + calculadora.divisao(4, 0));

const numerosParaMedia = [10, 10, 10, 9, 8];
console.log("Média: " + calculadora.calcularMedia(numerosParaMedia));