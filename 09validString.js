//verificar se a string contem as mesmas quantidades de cada caracter
function entrada(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return todosIguais(Object.values(obj));
}

function todosIguais(array) {
  if (array.length === 0) {
    return true;
  }
  let primeiroElemento = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primeiroElemento) {
      return false;
    }
  }
  return true;
}

console.log(entrada("This is Thee"));
console.log(entrada("ssd"));
console.log(entrada(""));
console.log(entrada("Lorem ipsum"));
console.log(entrada("QQwweerrttyy"));
