
# Atividades de Formação JavaScript Alura


Nesse repositorio está todos os desafios feitos durante os cursos da formação "Aprenda a programar em JavaScript com foco no back-end" da plataforma Alura. Cada código foi feito para práticar a linguagem JavaScript na jornada de aprendizado da formação. \
Esse repositório será atualizado ao longo do tempo com mais desafios conforme a formação é realizada.

## atalho para cada seção/curso

- [JavaScript: utilizando tipos, variáveis e funções](#javascript-utilizando-tipos-variáveis-e-funções)
- [JavaScript: conhecendo arrays](#javascript-conhecendo-arrays)
- [JavaScript: conhecendo objetos](#javascript-conhecendo-objetos)

## JavaScript: utilizando tipos, variáveis e funções

1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

7. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

8. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

9. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

10. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

11. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

12. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

13. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

14. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

15. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

16. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

17. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

18. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

19. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

20. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

21. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

## JavaScript: conhecendo arrays

1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

6. Crie uma função que receba dois arrays e os concatene em um único array.

7. Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

8. Dado o array frutas contendo frutas que desejamos comprar na feira:
- const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
- Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

9. Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

10. Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento. Dicas:
- comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
- você pode resolver usando um for dentro de outro for.
- Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada.
- Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional.

11. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

12. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

13. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

14. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

15. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

16. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

17. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

18. Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

19. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

20. Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
```
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];
```
- Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

21. Considere um array de números inteiros: `const numeros = [6, 9, 12, 15, 18, 21];` Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

22. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
- Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

23. Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

24. Considere duas listas de cores:
```
const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];
```
- Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

25. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

26. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

27. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

## JavaScript: conhecendo objetos

1.  Crie um arquivo chamado `livro.js`. Nesse arquivo, crie um objeto `livro` que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
  - `titulo` (string): título do livro.
  - `autor` (string): nome do autor do livro.
  - `anoPublicacao` (number): ano de publicação do livro.
  - `genero` (string): gênero do livro.
- No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

2.  Crie uma nova variável chamada `anoAtual` e atribua a ela o ano atual (utilize `new Date().getFullYear()`). Crie um objeto chamado `livro` com as seguintes propriedades: título, autor, ano de publicação e gênero.
- Adicione a propriedade `idadePublicacao` diretamente ao objeto `livro`, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o `anoDePublicacao` do `anoAtual`.
- Crie uma string chamada `mostrarDetalhes` contendo os detalhes do `livro`, incluindo a informação da idade de publicação.
- Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

3. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

4. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada `avaliacao`. Esta propriedade deve ser inicializada como `null`.
- No final do arquivo livro.js, adicione uma avaliação ao objeto.
- Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
- Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

5. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

6. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

7. Crie um arquivo chamado `infoPessoa.js`. Nesse arquivo, crie um objeto chamado `pessoa` que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
  - `nome` (string): Nome da pessoa.
  - `idade` (number): Idade da pessoa.
  - `solteiro` (boolean): Indicador de estado civil (true se solteiro, false se casado).
  - `hobbies` (array): Lista de hobbies da pessoa.
- Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
- Crie uma função chamada `mostrarInfoPessoa` que aceite o objeto `pessoa` como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
- No final do arquivo `infoPessoa.js`, chame a função `mostrarInfoPessoa` passando o objeto pessoa como argumento.
- Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

8. Adicione ao objeto pessoa uma nova propriedade chamada `endereco`. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
  - `rua` (string): nome da rua.
  - `cidade` (string): nome da cidade.
  - `estado` (string): nome do estado.
- Preencha as subpropriedades do objeto endereco com valores fictícios.
- Modifique a função `mostrarInfoPessoa` para incluir as informações do endereço da pessoa ao ser chamada.
- No final do arquivo `infoPessoa.js`, chame a função `mostrarInfoPessoa` para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

9.  Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:
  - `nome` (string): nome da pessoa.
  - `idade` (number): idade da pessoa.
  - `cidade` (string): cidade de residência da pessoa.
  - Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
- a) Crie uma função chamada `mostrarListaPessoas` que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
- b) Adicione uma nova pessoa à lista pessoas utilizando o método `push`. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
- c) Chame a função `mostrarListaPessoas` para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
- d) Crie uma função chamada `filtrarPorCidade` que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
- Chame a função `filtrarPorCidade` passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

10.  Crie um objeto chamado `calculadora` que terá os seguintes métodos:
  - `soma`: uma função que aceita dois parâmetros e retorna a soma deles.
  - `subtracao`: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
  - `multiplicacao`: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
  - `divisao`: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
- a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
- b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
- c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.

11.  Crie um objeto chamado `contaBancaria` com as seguintes propriedades:
  - `titular`: uma string representando o titular da conta.
  - `saldo`: um número representando o saldo da conta.
  - `depositar`: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
  - `sacar`: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
  - Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:
  - `nome`: uma string representando o nome do cliente.
  - `conta`: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
- Crie uma função chamada `mostrarSaldo` que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
- Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto `contaBancaria` e, em seguida, chame a função para exibir as informações atualizadas no console.

12. Crie um objeto chamado `pessoa` que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: `nome` e `notas`. Adicione um método chamado `calcularMediaNotas` ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
- Adicione um método chamado `classificarDesempenho` ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
  - Desempenho excelente: média >= 9
  - Bom desempenho: 7.5 <= média entre 7.6 e 8.9
  - Desempenho regular: 6 <= média entre 6 e 7.5
  - Desempenho insuficiente: média < 6
  - Chame o método `calcularMediaNotas` para calcular a média das notas da pessoa e imprima no console a média calculada.
- Chame o método `classificarDesempenho` e imprima no console a categoria de desempenho da pessoa.

13. Crie um objeto chamado `carro` que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
  - `marca` (string): marca do carro.
  - `modelo` (string): modelo do carro.
  - `ano` (number): ano de fabricação do carro.
  - `cor` (string): cor do carro.
- Utilize o loop `for...in` para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
- Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
- Utilize novamente o loop `for...in` para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

14.  Crie um arquivo chamado `metodosObjeto.js` para realizar este exercício.
- Utilize o objeto carro do exercício 2 com as propriedades iniciais (`marca`, `modelo`, `ano`, `cor`) e adicione:
  - `ligado`: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
  - `ligar`: um método que imprime no console uma mensagem indicando que o carro está ligado.
  - `desligar`: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
  - `obterDetalhes`: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
- Em seguida, faça o seguinte:
  - Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
  - Chame o método obterDetalhes e imprima no console a string retornada.

15. No objeto `carro`, adicione uma nova propriedade chamada `placa` representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
- Utilize um loop `for...in` para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
- Utilize o método `Object.keys()` para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
- Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

16.  Crie um novo objeto chamado `carroNovo` para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
  - `marca` (string): marca do novo carro.
  - `modelo` (string): modelo do novo carro.
  - `ano` (number): ano de fabricação do novo carro.
  - `cor` (string): cor do novo carro.
- Utilize o operador de espalhamento (`...`) para criar um novo objeto chamado `carroComNovosDetalhes` que herde todas as propriedades do objeto carro e adicione as propriedades do objeto `carroNovo`.
- Imprima no console o objeto `carroComNovosDetalhes` para verificar as informações do carro com os novos detalhes.
- Modifique o valor de uma propriedade no objeto `carroComNovosDetalhes` e imprima novamente o objeto no console para confirmar as alterações.
