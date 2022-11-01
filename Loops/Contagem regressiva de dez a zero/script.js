let resultado = document.querySelector('.resultado');

function contar(){
    for(let i = 10; i > 0; i--){
        console.log(i)
        resultado.innerHTML += i + '<br>';
    }
}