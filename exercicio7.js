let tempo = prompt ("Entre com o tempo de experiência"); 

tempo = parseFloat(tempo);

if (tempo < 2) {
    document.write("Júnior");
} else if ((tempo>2) && (tempo<5)) {
    document.write("Pleno");
} if (tempo > 5) {
    document.write("Sênior");
}
