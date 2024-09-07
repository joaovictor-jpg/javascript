function filtrarOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}

export function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtrarOcorrencias(paragrafo).join(', ');
        if(duplicadas) {
            textoFinal += `Palavra duplicada no páragrafo ${indice + 1}: ${duplicadas} \n`;
        }
    })
    return textoFinal;
}