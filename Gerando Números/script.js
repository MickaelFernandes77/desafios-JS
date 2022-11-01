let resultado = document.querySelector('.resultado');

function gerar(){
    let num = Math.floor(Math.random() * 100);
    resultado.innerHTML += `Acabei de pensar no número ${num}! <br><br>`;
}

function limpar(){
    resultado.innerHTML = ' ';
}