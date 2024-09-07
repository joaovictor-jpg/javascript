const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];


function exibirNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const media = lista[1][indice];
        console.log(`${aluno} tem a média ${media}`);
    } else {
        console.log("Estudante não existe na lista");
    }
}

exibirNomeENota("Arthur");