// Resolvendo equação de segundo grau, passo a passo
function entrada(a, b, c) {
  if (a == undefined && b == undefined && c == undefined) {
    return `parametros não foram informados`;
  } else if (a == 0 && b == 0) {
    return `1. parametros insuficientes\n2. nao tem raiz real\n[]`;
  } else if (a == 0) {
    return `1. ${b}x + ${c} = 0\n2. ${b}x = ${c * -1}\n3. x = ${
      c * -1
    }/${b}\n4. x = ${(c * -1) / b}\n[${(c * -1) / b}]`;
  } else {
    return `1. Δ = ${b}² -4 * ${a} * ${c}\n2. Δ = ${
      b ** 2 - 4 * a * c
    }\n3. x'= (-(${b}) + √${
      b ** 2 - 4 * a * c
    }) / 2 * ${a}\n4. x"= (-(${b}) - √${
      b ** 2 - 4 * a * c
    }) / 2 * ${a}\n5. x'= (${-1 * b} + ${Math.sqrt(b ** 2 - 4 * a * c)}) / ${
      2 * a
    }\n6. x"= (${-1 * b} - ${Math.sqrt(b ** 2 - 4 * a * c)}) / ${
      2 * a
    }\n7. x'= ${((-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a}\n8. x"= ${
      ((-1 * b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a
    }\n[${((-1 * b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a},${
      ((-1 * b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a
    }]`;
  }
}

console.log(entrada(0, 2, 6));
console.log(entrada());
console.log(entrada(0, 0, 5));
console.log(entrada(1, -4, -5));
