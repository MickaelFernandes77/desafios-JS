// variaveis de manipulação de interface
let semaforo = document.querySelector('.imagem-semaforo');

function verde(){
    semaforo.src = '../img/verde.png';
}

function vermelho(){
    semaforo.src = '../img/vermelho.png'
}

function amarelo(){
    semaforo.src = '../img/amarelo.png'
}

function desligar(){
    semaforo.src = '../img/desligado.png';
}
