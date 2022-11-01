function executar(){
    let d = new Date();
    let hora = d.getHours();
    let minutos = d.getMinutes();
    let segundos = d.getSeconds();
    let resultado = document.querySelector('.campo-resultado');
    let ano = d.toDateString();

    ano += ' ' + hora + ':' + minutos + ':' + segundos + ' (Horario de Brasília)';
    resultado.innerHTML = ano;
}