export const estudanteReprovou = function (notaFilnal, faltas) {
    if (notaFilnal < 7 && faltas > 4 ) {
        return true;
    } else {
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));