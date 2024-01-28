//revisar o texto de acordo com os parametros
function entrada(frase, valor, posicao) {
  let fraseArray = frase.split("");
  let avanco = 0;
  for (i = 0; i <= frase.length; i++) {
    if (posicao.includes(i)) {
      fraseArray.splice(i + avanco, 0, valor);
      avanco++;
    }
  }
  return fraseArray.join("");
}

console.log(entrada("capaz utilizar as cápsulas emergência", "DE ", [6, 27]));
console.log(
  entrada(
    "Nós decidimos apesar das chances serem baixas que enviariamos um sinal para[...]",
    ",",
    [13, 45]
  )
);
console.log(entrada("Hello", "world", [6]));
console.log(entrada("Isso é um teste", "não", []));
