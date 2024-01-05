function media(...dados) {
  let soma = 0;
  for (let i in dados) {
    soma += dados[i];
  }
  return soma / dados.length;
}
// add essa linha na branch teste
// outra linha
console.log(media(10, 9, 6, 8, 9, 1, 5, 7));
console.log(media(2, 5, 7, 1, -2));
console.log(media(10, 10, 10, 10, 9));
console.log(media(25, 75));
