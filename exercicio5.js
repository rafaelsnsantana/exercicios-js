let b1 = prompt("Informe nota bimestre1");
let b2 = prompt("Informe nota bimestre2");
let b3 = prompt("Informe nota bimestre3");
let b4 = prompt("Informe nota bimestre4");
let nome = prompt("Informe nome");

b1 = parseFloat(b1);
b2 = parseFloat(b2);
b3 = parseFloat(b3);
b4 = parseFloat(b4);

let media = (b1+b2+b3+b4)/4;
media = parseFloat(media);

console.log("Aluno " + nome );
console.log("A média : " + media);

if (media >=5)
console.log("Aluno APROVADO");
else
console.log("Aluno REPROVADO");
