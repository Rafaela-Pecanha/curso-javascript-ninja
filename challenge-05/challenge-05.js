/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var a= [1,2,6,4,0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function array(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(array(a)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function array2(arg, a){
  return arg[a];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var tipos = ['fernando', 1, false, null, 3];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(array2(tipos, 0));
console.log(array2(tipos, 1));
console.log(array2(tipos, 2));
console.log(array2(tipos, 3));
console.log(array2(tipos, 4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
  var objeto = {
    'Jogos Vorazes' : {
      quantidadePaginas: 290,
      autor: "Roberto",
      editora: "KGF"
    },
    "Harry Potter" : {
      quantidadePaginas: 450,
      autor: "Carlos",
      editora: "POF"
    },
    "Rainha Vermelha" : {
      quantidadePaginas: 180,
      autor: "Maria",
      editora: "podp"
    }
  };
  if (nome == undefined){
    return objeto;
  }else{
    return objeto[nome];
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome_livro = 'Jogos Vorazes';
console.log("O livro " + nome_livro + " tem " + book(nome_livro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nome_livro + " é " + book(nome_livro).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nome_livro + " foi publicado pela editora " + book(nome_livro).editora);
