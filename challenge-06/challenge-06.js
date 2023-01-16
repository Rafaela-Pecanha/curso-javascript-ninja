/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Carioca";

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo', 'América'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
var showTeamPosition = function (a){
  a = a - 1;
  if(teams[a]==undefined){
    return "Não temos a informação do time que está nessa posição."
  }else{
    return  "O time que está em " + (a + 1) + "º lugar é o " + teams[a] +" .";
  }
  
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1)); //  Flamengo
console.log(showTeamPosition(3)); // Vasco
console.log(showTeamPosition(4)); // Botafogo
console.log(showTeamPosition(6)); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var cont = 20;
while(cont<=30){
  console.log(cont)
  cont ++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex = function(cor){
  switch (cor){
    case 'vermelho':
      return "O hexadecimal para a cor " + cor + " é #FF0000.";
      
    case 'azul':
      return "O hexadecimal para a cor " + cor + " é #0000FF.";
      
    case 'branco':
      return "O hexadecimal para a cor " + cor + " é #FFFFFF.";
     
    case 'preto':
      return "O hexadecimal para a cor " + cor + " é #000000.";
     
    case 'verde':
      return "O hexadecimal para a cor " + cor + " é #00FF00.";
      
    default:
      return "Não temos o equivalente hexadecimal para " + cor;
  }
 }

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('vermelho')); // O hexadecimal para a cor vermelho é #FF0000.
console.log(convertToHex('branco')); // O hexadecimal para a cor branco é #FFFFFF.
console.log(convertToHex('preto')); // O hexadecimal para a cor preto é #000000.
console.log(convertToHex('verde')); // O hexadecimal para a cor verde é #00FF00.
console.log(convertToHex('azul')); // O hexadecimal para a cor azul é #0000FF.
console.log(convertToHex('cinza')); // Não temos o equivalente hexadecimal para cinza
console.log(convertToHex('magenta')); // Não temos o equivalente hexadecimal para magenta
console.log(convertToHex('rosa')); // Não temos o equivalente hexadecimal para rosa
