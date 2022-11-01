let resultado = document.querySelector('.resultado');

function contar(){
    for(let i = 1; i < 11; i++){
    // achando os pares, e marcando com °
    if(i % 2 === 0){
            resultado.innerHTML += i + '°' + '<br>';
        }
    }    
}