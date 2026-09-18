let numeroLimite = 30;
let numero1, numero2, resposta;

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * numeroLimite + 1);
}

function resetarPergunta(){
    numero1 = gerarNumeroAleatorio();
    numero2 = gerarNumeroAleatorio();
    resposta = numero1 + numero2;

    document.getElementById('numero1').textContent = numero1;
    document.getElementById('numero2').textContent = numero2;
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
    resetarPergunta();
}

function verificarSoma(){
    const campoInput = document.querySelector('input');
    const chute = campoInput.value;
    
    if (chute.trim() == '') return;

    const item = document.createElement('li')
    const lista = document.getElementById('listaResultados')

    if (chute == resposta) {
        item.textContent = `${numero1} + ${numero2} = ${chute}. Parabens, você acertou!`;
        item.classList.add("respostaCerta")
    } else {
        item.textContent = `${numero1} + ${numero2} != ${chute}. Parabens, você é um fracasso!`;
        item.classList.add("respostaErrada")
    }

    lista.append(item);
    limparCampo();
}

resetarPergunta()

const campoInput = document.querySelector('input');
campoInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        verificarSoma();
    }
})