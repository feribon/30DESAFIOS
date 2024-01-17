//fatorial sem usar estrutura de repeticao BigInt(usar n)
function entrada(valor) {
  let big = BigInt(valor);
  if (big == 0n) {
    return 1n;
  } else {
    return big * entrada(big - 1n);
  }
}
console.log(entrada(5));
console.log(entrada(0));
console.log(entrada(32));
console.log(entrada(9n));
