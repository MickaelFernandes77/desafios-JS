function executar(){
    // instancia do objeto date
    let d = new Date();

    let ano = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let hora = d.getHours();
    let minutos = d.getMinutes();
    let segundos = d.getSeconds();
    let resultado = document.querySelector('.campo-resultado');
    let data = '<br> Ano: ' + ano + '<br> <br>' + 'Mês: ' + mes + '<br> <br>' + 'Dia: ' + dia + '<br> <br>' + 'Hora: ' + hora + '<br> <br>' + 'Minutos: ' + minutos + '<br> <br>' + 'Segundos: ' + segundos + '<br> <br>'
    
    // tratativa para receber o valor do mês
    switch (mes) {
        case 0:
            mes = 'Janeiro';
            break;
        case 1:
            mes = 'Fevereiro';
            break;
        case 2:
            mes = 'Março'
            break;
        case 3: 
            mes = 'Abril'
            break;
        case 4:
            mes = 'Maio';
            break;
        case 5: 
            mes = 'Junho'
            break;
        case 6:
            mes = 'Julho'
            break;
        case 7: 
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Setembro'
            break;
        case 9: 
            mes = 'Outubro'
            break;
        case 10: 
            mes = 'Novembro'
            break;
        case 11: 
            mes = 'Dezembro'
            break;
    }

    resultado.innerHTML = data;
}