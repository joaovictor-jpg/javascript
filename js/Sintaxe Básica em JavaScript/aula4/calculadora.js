function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao <= 0 || operacao >= 7) {
        alert('ERRO: Operação invalida');
        calculadora();
    } else {
        var n1 = Number(prompt('Insira o primeiro valor:'));
        var n2 = Number(prompt('Insira o segundo valor:'));

        if(!n1 || !n2) {
            alert('ERRO: Valores invalidos')
            calculadora();
        } else {
            switch (operacao) {
                case 1:
                    soma(n1, n2);
                    break;
                case 2:
                    subtracao(n1, n2);
                    break;
                case 3:
                    multiplicação(n1, n2);
                    break;
                case 4:
                    divisãoReal(n1, n2);
                        break;
                case 5:
                    divisãoInteira(n1, n2);
                    break;
                default:
                    potenciacao(n1, n2);
            }   
        }
    }
}

function novaOperacao() {
    let opcao = prompt('Deseja fazer nova opreção?\n 1 - Sim\n 2 - Não');

    if(opcao == 1) {
        calculadora();
    } else if(opcao == 2) {
        alert('Até mais!')
    } else {
        alert('Opção invalida!');
        novaOperacao();
    }
}

function soma(n1, n2) {
    var result = n1 + n2;
    alert(`${n1} + ${n2} == ${result}`);
    novaOperacao();
}

function subtracao(n1, n2) {
    var result = n1 - n2;
    alert(`${n1} - ${n2} == ${result}`);
    novaOperacao();
}

function multiplicação(n1, n2) {
    var result = n1 * n2;
    alert(`${n1} * ${n2} == ${result}`);
    novaOperacao();
}

function divisãoReal(n1, n2) {
    var result = n1 / n2;
    alert(`${n1} / ${n2} == ${result}`);
    novaOperacao();
}

function divisãoInteira(n1, n2) {
    var result = n1 % n2;
    alert(`resto da divisão entre ${n1} e ${n2} = ${result}`);
    novaOperacao();
}

function potenciacao(n1, n2) {
    var result = n1 ** n2;
    alert(`${n1} elevado a ${n2} = ${result}`);
    novaOperacao();
}

calculadora();