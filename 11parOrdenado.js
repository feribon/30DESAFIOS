//fazer o par ordenado crescente
function entrada([x, y]) {
  let arr = [];
  for (i = 0; i <= x; i++) {
    for (j = 0; j <= y; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
}

console.log(entrada([2, 2]));
console.log(entrada([2, 7]));
console.log(entrada([-3, -3]));
console.log(entrada([7, 6]));
