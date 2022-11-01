// variaveis de manipulação de interface
let lampada = document.querySelector('.imagem-lampada');

function ligar(){
    lampada.src = '../img/ligada.jpg';
}

function desligar(){
    lampada.src = '../img/desligada.jpg';
}

function quebrar(){
    lampada.src = '../img/quebrada.jpg'
}