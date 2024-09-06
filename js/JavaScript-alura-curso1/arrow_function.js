const estudanteReprovou = (notaFilnal, faltas) => {
    if (notaFilnal < 7 && faltas > 4 ) {
        return true;
    } else {
        return false;
    }
}

const exibirNome = (nome) => (
    `Seu Nome é: ${nome}`
);

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));
console.log(exibirNome());