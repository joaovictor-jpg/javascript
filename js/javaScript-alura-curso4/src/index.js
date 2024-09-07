export function contaPalavras(texto) {
    const paragrafos = extraiParagrafo(texto);
    const contagem = paragrafos
        .flatMap((paragrafo) => {
            if (!paragrafo) return [];
            return verificarPalavrasDuplicadas(paragrafo);
        })
    return contagem;
}

function extraiParagrafo(texto) {
    return texto.toLowerCase().split('\n');
}

function limpaPalavra(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificarPalavrasDuplicadas(texto) {
    const listaDePalavras = texto.split(' ');
    const resultado = {};
    listaDePalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavra(palavra);
            resultado[palavraLimpa] = (resultado[palavra] || 0) + 1;
        }
    })
    return resultado;
}