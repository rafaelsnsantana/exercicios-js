let participantes = prompt("Digite a quantidade de participantes ");

participantes = parseFloat(participantes);

if (participantes <=100)
console.log("Orçamento " + (participantes*35) );
else 
console.log("Orçamento " + ( (100*35) + ( (participantes-100) *45) ) );
