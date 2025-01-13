function achaAluno(alvo, lista){
    let alvoAchado = lista.find(nome => nome === alvo);
    if(alvoAchado){
        console.log('Aluno encontrado:', alvoAchado);
    }else{
        console.log('Aluno não encontrado');
    }
}

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

const listaAlunos = nomesTurmaA.concat(nomesTurmaB);

achaAluno('Ana Souza', listaAlunos);