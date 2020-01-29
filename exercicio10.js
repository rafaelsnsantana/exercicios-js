let pagamento, total, cadastro, compra;
compra = prompt ("informe o valor da compra ");
pagamento = prompt("Escolha a forma de pagamento: \n1-À VISTA\n2-CHEQUE\n3-CHEQUE30\n4-CHEQUE3060\n5-CHEQUE306090\n6-CARTÃO");

cadastro = prompt ("Cliente possui cadastro? sim ou não")
if (cadastro == "sim") {
    
    switch (pagamento) {
        case "1":
            total = compra - (compra * 0.5) ;
            break;
        case "2":
            total = compra - (compra * 0.4);
            break;
        case "3":
            total = compra - (compra * 0.2);
            break;
        case "4":
            total = compra - (compra * 0.1);
            break;
        case "5":
            total = compra - (compra * 0.05);
            break;
        case "6":
            total = compra - (compra * 0.3);
            break;
        default:
            pagamento = "Resposta inválida";
            break;
    }
    
    total = (total - (total * 0.05));
    document.write("O valor total foi " + total);
} else {
    switch (pagamento) {
        case "1":
            total = compra - (compra * 0.5) ;
            break;
        case "2":
            total = compra - (compra * 0.4);
            break;
        case "3":
            total = compra - (compra * 0.2);
            break;
        case "4":
            total = compra - (compra * 0.1);
            break;
        case "5":
            total = compra - (compra * 0.05);
            break;
        case "6":
            total = compra - (compra * 0.3);
            break;    
        default:
            pagamento = "Resposta inválida";
            break;
    }
    document.write("O valor total foi " + total);
}
