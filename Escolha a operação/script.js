let resultado = document.querySelector('.resultado');

function iniciar(){
    let num = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    let operacao = parseInt(prompt('Digite o número para a operação que deseja realizar: [0] soma | [1] subtração | [2] multiplicação | [3] divisão'));
    
    if(operacao == 0){
        resultado.innerHTML = `Os números passados foram ${num} e ${num2}. A Soma desses números tem o resultado de: ${num + num2}`;
    }else if(operacao == 1){
        resultado.innerHTML = `Os números passados foram ${num} e ${num2}. A Subtração desses números tem o resultado de: ${num - num2}`;;
    }else if(operacao == 2){
        resultado.innerHTML = `Os números passados foram ${num} e ${num2}. A Multiplicação desses números tem o resultado de: ${num * num2}`;;
    }
    else if(operacao == 3){
        resultado.innerHTML = `Os números passados foram ${num} e ${num2}. A Divisão desses números tem o resultado de: ${num / num2}`;;
    }else{
        resultado.innerHTML = `Opção Inválida. Os números passados foram ${num} e ${num2}. Porém não sei qual operação realizar, execute a operação de iniciar, e digite um número de 0 a 3 quando for escolher a operação.`
    }
}

function limpar(){
    resultado.innerHTML = ' ';
}