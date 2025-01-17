const carro = {
    marca: "ford",
    modelo: "mustang",
    ano: 2022,
    cor: "Prata",
    ligado: true, 
    placa: "FDS2004" 
};

Object.defineProperty(carro, "placa", { enumerable: false });

console.log("Propriedades Enumeráveis do Carro:");
for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

const chavesEnumeraveis = Object.keys(carro);
console.log("Chaves Enumeráveis do Carro:");
console.log(chavesEnumeraveis);

console.log("Acesso direto à propriedade placa:");
console.log(carro.placa);