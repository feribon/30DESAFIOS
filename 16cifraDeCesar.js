//descriptografar a cifra de cesar
// A = 65, Z = 90, a = 97,  z = 122 tabela ASCII
function entrada(code, key) {
  let letraArray = code.split("");
  let letras26 = key % 26;
  let codeArray = letraArray.map((letra) => {
    let corrente = letra.charCodeAt();
    if (corrente >= 65 && corrente <= 90 && corrente - letras26 < 65) {
      return corrente + 26;
    }
    if (corrente >= 97 && corrente <= 122 && corrente - letras26 < 97) {
      return corrente + 26;
    }
    return corrente;
  });
  return codeArray.map((code) => String.fromCharCode(code - letras26)).join("");
}

console.log(entrada("Vguvg", 2));
console.log(entrada("BCDYZAbcdyza", 27));
console.log(entrada("Qaiik", 60));
console.log(entrada("Amozmlw", 8));
