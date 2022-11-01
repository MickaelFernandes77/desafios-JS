let resultado = document.querySelector('.resultado');
let numAdvinha = Math.floor(Math.random() * 100);

function gerar(){
    let numPalpite = parseInt(prompt('Qual é o seu palpite?'))    

    if(numAdvinha < numPalpite ){
        resultado.innerHTML += `<br> Você falou ${numPalpite}. Meu número é MENOR! <br><br>`;
    }else if(numAdvinha > numPalpite){
        resultado.innerHTML += `<br> Você falou ${numPalpite}. Meu número é MAIOR! <br><br>`;  
    }else{
        resultado.innerHTML += `<br> Você falou ${numPalpite}. Você acertou, parabéns! <br><br>`;          
    }
}