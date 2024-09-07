const estudante ={
    nome: "José Silva",
    idade: 32,
    cpf: "1234567891011",
    turma: "JavaScript"
}

console.log(estudante);
console.log(estudante.nome);
console.log(`O nome do alune é: ${estudante.nome}`);
console.log(`Os três primeiros digitos do CPF do alune ${estudante.nome} é: ${estudante.cpf.substring(0, 3)}`);