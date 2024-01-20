//soma das posicoes pares vezes 3
//soma dos numeros impares, mais o resultado anterior
//resto da divisao por 10, resultado 0 = digito 0, restante digito = 10 menos o resto da divisao
function entrada(valor) {
  let convertString = valor.toString();
  let convertArray = convertString.split("");
  let digito = convertArray.pop();
  let somaPAr = 0;
  let somaImPar = 0;
  for (i = 0; i < convertArray.length; i++) {
    if (i % 2 == 0 || i == 0) {
      somaPAr += parseInt(convertArray[i]);
    } else {
      somaImPar += parseInt(convertArray[i]);
    }
  }
  let soma = somaPAr * 3 + somaImPar;
  let resto = soma % 10;
  return (resto == 0 && digito == 0) || digito == 10 - resto ? true : false;
  // if ((resto == 0 && digito == 0) || digito == 10 - resto) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(entrada(547020743789));
console.log(entrada(301354030348));
console.log(entrada(301354030349));
console.log(entrada(123456789872));
