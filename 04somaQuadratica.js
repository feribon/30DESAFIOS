//concatenar o quadrado de todos os numeros
function quadraticaSum(valores) {
  let str = valores.toString();
  let concat = "";
  for (i = 0; i < str.length; i++) {
    concat += str[i] * str[i];
  }
  return concat;
}

console.log(quadraticaSum(3514));
console.log(quadraticaSum(94571));
console.log(quadraticaSum(24));
console.log(quadraticaSum(745821698));
