let contador=0;
while (contador <=30){

let nome = prompt("Informe nome");
let n1 = prompt("Informe a nota1 " );
let n2 = prompt("Informe a nota2 " );
let n3 = prompt("Informe a nota3 " );
let n4 = prompt("Informe a nota4 " );

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

let media = (n1+n2+n3+n4)/4;
media = parseFloat(media);

document.write("<br> Aluno: " + nome );
document.write("<br> Média: " + media);

    if (media <5) {
    document.write("\n REPROVADO <br>");
    } else {
    document.write("\n APROVADO <br>");
    }  

    contador++;
}



