const cartaoFrente = document.querySelector('.caixa-cartao-frente');
const cartaoCosta = document.querySelector('.caixa-cartao-costa');
const inputsCartao = document.querySelectorAll('.input-cartao');
const botaoConfirmar = document.querySelector('.botao');

const dadosCVC = document.querySelector('.cvc-cartao-costa');
const dadosNumeroCartao = document.querySelector('.numero-cartao');
const dadosProprietario = document.querySelector('.proprietario-cartao');
const dadosValidadeCartao = document.querySelector('.validade-cartao');
const cabeca = document.querySelector('head > title');


exibirLadoDoCartaoEmFoco();
numeroDoCartaoNaTela();


function exibirLadoDoCartaoEmFoco() {
    inputsCartao.forEach((input, index) => {
        input.addEventListener('focus', () => {
            if (index == 4) {
                cartaoCosta.style.animation = 'exibirCartaoFoco 600ms forwards'
                cartaoFrente.style.animation = ''
            } else {
                cartaoFrente.style.animation = 'exibirCartaoFoco 600ms forwards'
                cartaoCosta.style.animation = ''
            };
        });
    });
}

function numeroDoCartaoNaTela() {
    inputsCartao[1].addEventListener('input', () => {
        // dadosNumeroCartao.textContent.length[1] = inputsCartao[1].value;
        console.log(dadosNumeroCartao.textContent.length)
    });
}