function verificar(){
    let num = parseInt(prompt('Digite o 1° Número'));
    let num2 = parseInt(prompt('Digite o 2° Número'));
    let resultado = document.querySelector('.campo-resultado');
    
    if(num > num2){
        resultado.innerHTML = `Os números passados foram: ${num} e ${num2}. E o maior número é: ${num}`;
    }else{
        resultado.innerHTML = `Os números passados foram: ${num} e ${num2}. E o maior número é: ${num2}`;    
    }
}