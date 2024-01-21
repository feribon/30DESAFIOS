//licença de formada por 5 caracteres maiusculo do sobrenome, se tiver menos 5 complementar com 9, depois terceiro numero do ano de nascimento, depois mes de nascimento, depois ultimo digito do ano de nascimento e por ultimo primeira letra do nome minuscula
class Piloto {
  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(birthday);
    this.flyinglicense = false;
  }
  getAniversario() {
    if (this.birthday.getMonth() < 9) {
      return `0${this.birthday.getMonth() + 1}`;
    } else {
      return `${this.birthday.getMonth() + 1}`;
    }
  }
  getLicenca() {
    let licenca = "";
    for (let i = 0; i < 5; i++) {
      licenca += this.lastName[i] ? this.lastName[i].toUpperCase() : "9";
    }
    licenca += "-";
    licenca += this.birthday.getFullYear().toString()[2];
    licenca += this.getAniversario();
    licenca += this.birthday.getFullYear().toString()[3];
    licenca += ".";
    licenca += this.firstName[0].toLowerCase();
    this.flyinglicense = licenca;
  }
}
const piloto1 = new Piloto("John", "Doe", "05-25-1977");
const piloto2 = new Piloto("Hal", "Jordan", "09-02-1995");
const piloto3 = new Piloto("Carol", "Danvers", "10-17-1968");
const piloto4 = new Piloto("Poe", "Dameron", "03-09-1979");
const piloto5 = new Piloto("Felipe", "Ribon", "08-05-1987");

piloto1.getLicenca();
piloto2.getLicenca();
piloto3.getLicenca();
piloto4.getLicenca();
piloto5.getLicenca();

console.log(piloto1);
console.log(piloto2);
console.log(piloto3);
console.log(piloto4);
console.log(piloto5);
