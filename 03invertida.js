//inverter o array sem modificar o original
function reverse(arr) {
  let invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i])
  }
  return invertido;
}
console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "Hi", "Mark"]));
console.log(reverse([false, true, true, true]));
console.log(reverse(["It's", "not", true, 0]));

