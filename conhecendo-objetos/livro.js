const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O exterminador do futuro",
    autor: "michael bay",
    anoPublicacao: 1954,
    idadePublicacao: anoAtual - 1954,
    genero: "futurista",
    avaliacao: null
};

if (livro.avaliacao === null) {
    livro.avaliacao = { nota: 10, comentario: "perfeito!" };
} else {
    console.log("Este livro já possui uma avaliação.");
}

livro.genero = "aventura";

const mostrarDetalhes =`Detalhes do Livro:
    Título: ${livro['titulo']}
    Autor: ${livro['autor']}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}
    idade da publicação: ${livro.idadePublicacao}
    avaliação: ${(livro.avaliacao === null 
        ? "Nenhuma avaliação disponível." : "Nota: " + livro.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\"")}`;

console.log(mostrarDetalhes);

if(delete livro.avaliacao){
    console.log("avaliação deletada");
}
