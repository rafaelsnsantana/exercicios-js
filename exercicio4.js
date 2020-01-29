let qtdmin = prompt("Entre com a quantidade minima ");
let qtdmax = prompt("Entre com a quantidade maxima ");
qtdmin = parseFloat(qtdmin);
qtdmax = parseFloat(qtdmax);
let estoquemedio = (qtdmin + qtdmax)/2


console.log("Estoque médio " + estoquemedio);