// I1, V5, X10, L50, C100, D500, M1000
function entrada(dados) {
  let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let arr = dados.split("");
  let arabico = arr.map((item) => obj[item]);
  let soma = 0;

  return arabico.reduceRight((acc, atual, idx, arr) => {
    console.log(`atual: ${atual} arr[idx+1]:${arr[idx+1]}`)
    if (atual < arr[idx + 1]) {
      return acc - atual;
    } else {
      return acc + atual;
    }
  }, 0);
}

console.log(entrada("XLVII"));
console.log(entrada("CDXXXVIII"));
console.log(entrada("CMIX"));
console.log(entrada("MMMCMXCIX"));
