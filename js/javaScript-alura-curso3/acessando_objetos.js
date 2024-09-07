const estudante ={
    nome: "José Silva",
    idade: 32,
    cpf: "1234567891011",
    turma: "JavaScript"
}

function exibirEstudante(objetoEstudante, infoEstudante) {
    return objetoEstudante[infoEstudante];
}

console.log(exibirEstudante(estudante, "nome"));
console.log(exibirEstudante(estudante, "turma"));


console.log(estudante.pet);
console.log(estudante["pet"]);