function contar(){
    let numero = document.querySelector('.numero').value;
    let resultado = document.querySelector('.resultado');
    // acessando o p com a classe texto, na div resultado
    let texto = document.querySelector('.resultado .texto');

    texto.innerHTML = 'Contando do 0 até o ' + numero
    for(let i = 1; i <= numero; i++){
        resultado.innerHTML += i + '<br>';
    }
}
