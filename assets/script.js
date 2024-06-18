





function calculadora(){
    let continuar = true;

    let operacao = prompt("escolha operação: 1 Para adição,2 Para subtração, 3 para multiplicação, 4 para divisão \n")
    let num1 = prompt("digite um valor: \n")
    let num2 = prompt("Digite outro valor: \n")
    while (continuar) {
    let operacao 
    switch(operacao){
        case 1:
            soma(num1, num2);
            break;
        case 2:
            subtracao(num1, num2);
            break;
        case 3:
            multiplicacao(num1, num2);
            break;
        case 4:
            divisao(num1, num2);
            break;
        default:
            console.log("opção invalida");
            break;
    }
    let resposta = prompt("Deseja continuar calculando? (Digite 'sim' para continuar)");

    // Verificar a resposta do usuário
    if (resposta.toLowerCase() !== 'sim') {
        continuar = false;
     }
   }
}



function soma(num1,num2){
    let resultado = num1 + num2
    return resultado  
}

function subtracao(num1,num2){
    let resultado = num1 - num2
    return resultado  
}

function multiplicacao(num1,num2){
    let resultado = num1 * num2
    return resultado  
}

function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2
    } else {
        console.log("Erro: Divisão por zero!")
        return undefined
    }
}

calculadora();