//pegar a maior letra na ordem alfabetica
function maiorLetra(texto) {
  let minuscula = texto.toLowerCase();
  let virandoArray = minuscula.split('');
  let sorteando = virandoArray.sort();
  return sorteando[sorteando.length - 1];
}

console.log(maiorLetra("Lorem ipsum dolore sec avanti"));
console.log(maiorLetra("Hello"));
console.log(maiorLetra("May the force be with you"));
console.log(maiorLetra("Its over nine thousand"));
