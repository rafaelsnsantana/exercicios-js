let n1 = prompt("Informe nota1");
let n2 = prompt("Informe nota2");
let n3 = prompt("Informe nota3");
let n4 = prompt("Informe nota4");
let n5 = prompt("Informe nota5");
let nome = prompt("Informe nome");

n1 = parseFloat(n1);
n2 = parseFloat(n1);
n3 = parseFloat(n1);
n4 = parseFloat(n1);
n5 = parseFloat(n1);

let media = (n1+n2+n3+n4+n5)/5;

console.log("Aluno " + nome );
console.log("A média : " + media);