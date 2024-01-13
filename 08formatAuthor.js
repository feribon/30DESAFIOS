//escrever os nomes no formato de nome de autor em livros
function nome(completo) {
  let maiusculo = completo.toUpperCase();
  let separado = maiusculo.split(" ");
  let lastName = separado[separado.length - 1];
  let inicial = "";
  for (i = 0; i < separado.length - 1; i++) {
    inicial += `${separado[i][0]}. `;
  }
  return `${lastName}, ${inicial}`;
}

console.log(nome("Isaac Larrubia Ferreira Pontes"));
console.log(nome("John Ronald Ruel Tolkien"));
console.log(nome("christopher james paolini"));
console.log(nome("Felipe Grassi Ribon"));
