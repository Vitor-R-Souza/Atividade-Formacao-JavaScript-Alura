const carro = {
    marca: "chev",
    modelo: "camaro",
    ano: 1970,
    cor: "Prata"
};

console.log("================");

console.log("Detalhes do carro:");
for (let item in carro) {
    console.log(`${item}: ${carro[item]}`);
}

carro.cambio = "Automático";
carro.kmRodados = 5000;

console.log("================");

console.log("Detalhes atualizadas do carro:");
for (let item in carro) {
    console.log(`${item}: ${carro[item]}`);
}

console.log("================");