const carro = {
    marca: "dodge",
    modelo: "challeger",
    ano: 2022,
    cor: "branco",
    ligado: true 
};

const carroNovo = {
    marca: "chev",
    modelo: "camaro",
    ano: 1985,
    cor: "Azul"
};

const carroComNovosDetalhes = { ...carro, ...carroNovo };

console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.ano = 2000;

console.log("Carro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);