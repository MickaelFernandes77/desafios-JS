// exercicio média

// variaveis de manipulação de interface
let nome = document.querySelector('.nome');
let notas = document.querySelector('.notas');
let media_final = document.querySelector('.media_final');
let mensagem = document.querySelector('.mensagem');
let mensagemSpan = document.querySelector('.mensagem span');

function calcularMedia(){
// variaveis de ambiente
let n1, n2;
let media;

// uso da var nome
nome.innerHTML = `Calculando a média final de: ` 
nome.innerHTML += prompt('Qual o nome do Aluno: ');

// uso das vars n1 e n2
n1 = prompt('Digite a primeira nota do aluno: ');
n2 = prompt('Digite a segunda nota do aluno: ');

// uso da var notas
notas.innerHTML = `As notas obtidas foram ${n1} e ${n2}`;

// uso das vars media e media final
media = (parseInt(n1) + parseInt(n2)) / 2;
// arredonda o valor para baixo
Math.floor(media);

media_final.innerHTML = `A média Final será : ${media}`

    if(media < 4){
        mensagemSpan = 'Estude um pouco mais';
        mensagem.innerHTML = `A mensagem que temos é: ${mensagemSpan}`;
    }

    if(media >= 5 && media <= 7){
        mensagemSpan = 'Muito bem!';
        mensagem.innerHTML = `A mensagem que temos é: ${mensagemSpan}`;
    }

    if(media >= 8){
        mensagemSpan = 'Meus Parabéns!';
        mensagem.innerHTML = `A mensagem que temos é: ${mensagemSpan}`;
    }
};
