// I1, V5, X10, L50, C100, D500, M1000
function entrada(dados) {
  let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let arr = dados.split("");
  let arabico = arr.map((item) => obj[item]);
  let soma = 0;
  let temp = 0;
  for (i = arabico.length - 1; i >= 0; i--) {
    if (arabico[i] <= arabico[i - 1] || arabico[i] == undefined) {
      soma += arabico[i];
      console.log(`soma ${soma}`);
    } else {
      soma -= arabico[i+1];
      console.log(`temp ${soma}`);
    }
  }
}

entrada("XLVII");
// console.log(entrada("CDXXXVIII"));
// console.log(entrada("CMIX"));
// console.log(entrada("MMMCMXCIX"));
