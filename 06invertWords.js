//inverter as letras de cada palavra na frase e deixar minuscula
function maiorLetra(texto) {
  let minuscula = texto.toLowerCase();
  let virandoArray = minuscula.split(" ");
  let invertida = virandoArray.map((word) => word.split("").reverse().join(""));
  let juntar = invertida.join(" ");
  return juntar;
}

console.log(maiorLetra("Lorem ipsum dolore sec avanti"));
console.log(maiorLetra("This is an apple"));
console.log(maiorLetra("May the force be with you"));
console.log(maiorLetra("Its over nine thousand"));
