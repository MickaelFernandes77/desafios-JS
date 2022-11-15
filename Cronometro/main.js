// variaveis que vão receber os núemros cronometrados
var decimos = 00;
var segundos = 00;
var minutos = 00;

// variaveis dos campos dos numeros, e dos botões
var addDecimos = document.getElementById("decimos");
var addSegundos = document.getElementById("segundos");
var addMinutos = document.getElementById("minutos");
var btnStart = document.getElementById("start");
var btnStop = document.getElementById("stop");
var btnReset = document.getElementById("reset");
// var do intervalo
var intervalo;

// função para iniciar a rodar o cronometro
btnStart.onclick = function() {
        clearInterval(intervalo);
        // recebe a função de intervalo, que vem com a função startTimer(declarada no fim do código)
        intervalo = setInterval(startTimer, 10);

    }
    // função para parar o cronometro
btnStop.onclick = function() {
        // para a var que recebe a função de intervalo
        clearInterval(intervalo);
    }
    // função para reiniciar o cronometro
btnReset.onclick = function() {
    // os valores das var recebem 0
    decimos = 00;
    segundos = 00
    minutos = 00;

    // e as var que tem os ids dos elemetnos no html, recebem as vars com o valor 0.
    addSegundos.innerHTML = segundos;
    addDecimos.innerHTML = decimos;
    addMinutos.innerHTML = minutos;
}

function startTimer() {
    decimos++;

    // se os decimos forem menor que 9, addSegundos vai receber 0 e a var segundos(que vai ter 1,2...)
    if (decimos <= 9) {
        addDecimos.innerHTML = "0" + decimos;
    }

    // se os decimos forem maior que 9, addDecimos vai receber a var decimos(que vai ter 1,2...)
    if (decimos > 9) {
        addDecimos.innerHTML = decimos;
    }

    // se os decimos forem maior que 99, os segundos passarão a ser contados, a var segundos vai somando 1 a cada 99 decimos, e a var addSegundos recebe esses segundos. E a var decimos recebe 0 e a var addDecimos recebe os decimos, zerando a contagem.

    if (decimos > 99) {
        segundos++;
        addSegundos.innerHTML = "0" + segundos;
        decimos = 0;
        addDecimos.innerHTML = "0" + 0;

    }
    // Se os segundos forem maior, que nove, a var addSegundos passa a receber os segundos normais. sem  a adição do 0.
    if (segundos > 9) {
        addSegundos.innerHTML = segundos;
    }

    if (segundos > 59) {
        minutos++;
        addMinutos.innerHTML = "0" + minutos;
        segundos = 0;
        addSegundos.innerHTML = "0" + 0;
    }


}