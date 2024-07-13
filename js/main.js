const cartaoFrente = document.querySelector('.caixa-cartao-frente');
const cartaoCosta = document.querySelector('.caixa-cartao-costa');
const inputsCartao = document.querySelectorAll('.input-cartao');
const botaoConfirmar = document.querySelector('.botao');
const conteudoPrincipal = document.querySelector('.menu-principal')
const inputsValidade = document.querySelectorAll('#input-validade')

const dadosCVC = document.querySelector('.cvc-cartao-costa');
const dadosNumeroCartao = document.querySelector('.numero-cartao');
const dadosProprietario = document.querySelector('.proprietario-cartao');
const dadosValidadeCartao = document.querySelectorAll('.validade-cartao > b');




function irParaAno() {
    const campoMes = document.querySelector('.input-data-mes');
    if (campoMes.value.length == 2) {
        document.querySelector('.input-data-ano').focus();
    }
}

exibirLadoDoCartaoEmFoco();
numeroDoCartaoNaTela();
nomeProprietarioNaTela();
cvcNaTela();
confirmarPagamento();
exibirValidadeNaTela();


function exibirValidadeNaTela() {
    const inputMes = inputsValidade[0];
    const inputAno = inputsValidade[1];
    const dadosMes = dadosValidadeCartao[0];
    const dadosAno = dadosValidadeCartao[1];

    inputMes.addEventListener('input', () => {
        dadosMes.textContent = adicionarZerosNumCard(inputMes.value, 2)
    })
    inputAno.addEventListener('input', () => {
        dadosAno.textContent = adicionarZerosNumCard(inputAno.value, 2)
    })

}

function confirmarPagamento() {
    botaoConfirmar.addEventListener('click', () => {

        conteudoPrincipal.innerHTML = `
        <main class="container-confirmacao">
        <img src="./images/icon-complete.svg" alt="">
        <p class="agradecer__confirmacao">Obrigado!</p>
        <h2 class="feedback__confirmacao">Detalhes do cartão adicionados</h2>
        <a class="botao botao-about" href="index.html">Confirmar</a>
        </main>
        `
    });
}

function exibirLadoDoCartaoEmFoco() {
    inputsCartao.forEach((input, index) => {
        input.addEventListener('focus', () => {
            if (index == 4) {
                cartaoCosta.style.animation = 'exibirCartaoFoco 600ms forwards';
                cartaoFrente.style.animation = '';
                // dadosNumeroCartao.style.background = ''
            } else {
                cartaoFrente.style.animation = 'exibirCartaoFoco 600ms forwards';
                // dadosNumeroCartao.style.background = 'rgba(255, 255, 255, 0.162)'
                // dadosNumeroCartao.style.letterSpacing = '4px'
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
        const nomeProprietario = inputNomeProprietario.value.toUpperCase()
        const NomeProprietarioFormatado = nomeProprietario.replace(/\d/g, "");

        dadosProprietario.textContent = NomeProprietarioFormatado;
        inputNomeProprietario.value = nomeProprietario.replace(/\d/g, "");

        if (inputNomeProprietario.value == '') {
            dadosProprietario.textContent = 'MATHEUS ALVES'
        }
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