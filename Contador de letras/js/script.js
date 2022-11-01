function contar(){
    let input = document.querySelector('input').value;
    // convertendo o valor do input em um array
    let inputArr = input.split('');

    // filtrando todos os valores que forem diferentes de vazio, para pegar a quantidade exata de strings
    let resultado = inputArr.filter(function(item){
        if(item != ' '){
            return true;
        }
    })

    let tamanho = resultado.length;
    alert('O tamanho do texto ou palavra que você digitou é de: ' + tamanho + ' letras');
    // zerando o valor do input, para os proximos digitos
    input = '';
}
