function gerar(){
    let anoNasc = parseInt(prompt('Em que ano você nasceu?'));
    let ano = new Date();
    let resultado = document.querySelector('.resultado');
    let idade =  ano.getFullYear() - anoNasc;

    resultado.innerHTML = `Quem nasceu em ${anoNasc} vai completar ${idade} anos em ${ano.getFullYear()}`;
}

function limpar(){
    resultado.innerHTML = ' ';
}