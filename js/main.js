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
nomeProprietarioNaTela();
cvcNaTela();


function exibirLadoDoCartaoEmFoco() {
    inputsCartao.forEach((input, index) => {
        input.addEventListener('focus', () => {
            if (index == 4) {
                cartaoCosta.style.animation = 'exibirCartaoFoco 600ms forwards';
                cartaoFrente.style.animation = '';
            } else {
                cartaoFrente.style.animation = 'exibirCartaoFoco 600ms forwards';
                cartaoCosta.style.animation = '';
            };
        });
    });
}


function cvcNaTela() {
    const inputCVC = inputsCartao[4];

    inputCVC.addEventListener('input', () => {
        dadosCVC.textContent = adicionarZerosNumCard(inputCVC.value, 3);

        const previaComEspacos = formatarDadosCartao(inputCVC.value);
        inputCVC.value = previaComEspacos;

        const previaComEspaco = formatarDadosCartao(dadosCVC.textContent);
        dadosCVC.textContent = previaComEspaco;
    })
}

function nomeProprietarioNaTela() {
    const inputNomeProprietario = inputsCartao[0];

    inputNomeProprietario.addEventListener('input', () => {
        dadosProprietario.textContent = inputNomeProprietario.value.toUpperCase();
    })
}

function numeroDoCartaoNaTela() {
    const inputNumCartao = inputsCartao[1];

    inputNumCartao.addEventListener('input', () => {
        let numeroPreviaCartao = new String(adicionarZerosNumCard(inputNumCartao.value, 16));
        const regexAdicionarEspaco = /(.{4})/g;
        
        
        const previaComEspacos = formatarDadosCartao(numeroPreviaCartao);
        dadosNumeroCartao.textContent = previaComEspacos;
        const previaComEspaco = formatarDadosCartao(inputNumCartao.value);
        inputNumCartao.value = previaComEspaco;
        dadosNumeroCartao.textContent = dadosNumeroCartao.textContent.replace(regexAdicionarEspaco, "$1 ");
    });
}

function formatarDadosCartao(numeroPreviaCartao) {
    const regexRemoverEspaco = /\s/g;
    // const regexAdicionarEspaco = /(.{4})/g;
    const regexRemoverLetra = /[^\d]/g;

    const previaSemLetras = numeroPreviaCartao.replace(regexRemoverLetra, "");
    const previaSemEspacos = previaSemLetras.replace(regexRemoverEspaco, "");
    // const previaComEspacos = previaSemEspacos.replace(regexAdicionarEspaco, "$1 ");
    return previaSemEspacos;
}

function adicionarZerosNumCard(string, tamanhoMaximo) {
    let resultado = "";
    const numerosZeros = tamanhoMaximo - string.length;

    for (let i = 0; i < numerosZeros; i++) {
        resultado += '0'
    }

    return string += resultado;
}