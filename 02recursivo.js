//o valor é o numero de vezes q a palavra chunk vai ser escrita
function recursiva(numero) {
  if (numero === 0) {
    return "";
  }
  if (numero === 1) {
    return "chunk";
  } else {
    return "chunk-" + recursiva(numero - 1);
  }
}
console.log(recursiva(4));
console.log(recursiva(1));
console.log(recursiva(0));
console.log(recursiva(8));
console.log(recursiva(2));
