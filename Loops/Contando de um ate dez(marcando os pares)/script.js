let resultado = document.querySelector('.resultado');

function contar(){
    for(let i = 1; i < 11; i++){

    //achando os impares 
    if(i % 2 != 0){
        let impar = i;
        console.log(impar)
        resultado.innerHTML += impar + '<br>';
    }

    // achando os pares, e marcando com °
    if(i % 2 === 0){
            let par = i;
            resultado.innerHTML += par + '°' + '<br>';
        }
    }    
}