//dando preferencia para moedas de valores mais alto, quanto se precisa de cada moeda
function entrada(valor) {
  let obj = { 500: 0, 100: 0, 25: 0, 10: 0, 5: 0, 1: 0 };
  obj[500] = Math.floor(valor / 500);
  valor -= obj[500] * 500;
  obj[100] = Math.floor(valor / 100);
  valor -= obj[100] * 100;
  obj[25] = Math.floor(valor / 25);
  valor -= obj[25] * 25;
  obj[10] = Math.floor(valor / 10);
  valor -= obj[10] * 10;
  obj[5] = Math.floor(valor / 5);
  valor -= obj[5] * 5;
  obj[1] = Math.floor(valor / 1);
  valor -= obj[1] * 1;
  return obj;
}
console.log(entrada(478));
console.log(entrada(384));
console.log(entrada(5412));
console.log(entrada(50));
