function verificaPalindromo(texto){
    texto = texto.toLowerCase();
    const invert = texto.split('').reverse().join('');
    return texto === invert;
}

console.log(verificaPalindromo('texto'));
console.log(verificaPalindromo('arara'));

