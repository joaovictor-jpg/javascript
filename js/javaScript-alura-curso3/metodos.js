const estudante ={
    nome: "José Silva",
    idade: 32,
    cpf: "1234567891011",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["21973711216", "21973711216"],
    endereco: [{
        rua: "Rua Cristiano Machado",
        numero: "661",
        complemento: "apt 201"
    }],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante);
console.log(estudante.estaAprovado(7));