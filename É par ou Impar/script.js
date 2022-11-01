function verificar(){
    let numero = document.querySelector('.numero').value;

    if(numero % 2 === 0){
        alert('O número ' + numero + ' é par')
    }else{
        alert('O número ' + numero + ' é ímpar')
    }
}