function somaElementos(lista) {
    return lista.reduce((total, atual) => total + atual, 0); 
  }
  
  const listaNumeros = [1, 2, 3, 4, 5];
  const somaTotal = somaElementos(listaNumeros);
  console.log(somaTotal); 