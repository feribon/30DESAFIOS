//ordenar de forma crescente um array bidimensional em um unico array
function entrada(...valores) {
  let unicoArray = [].concat(...valores);
  let ordem = unicoArray.sort((a, b) => a - b);
  return ordem;
}

console.log(
  entrada([1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103])
);
console.log(entrada([1, 3], [4, 8], [7, 5], [2, 6]));
console.log(entrada([], [], [], []));
console.log(entrada([100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]));
