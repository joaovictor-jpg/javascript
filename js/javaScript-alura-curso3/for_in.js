const estudante = {
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
    },
    {
        rua: "Rua Xavier",
        numero: "71",
        complemento: null
    }],
    media: 7.5,
    estaAprovado: function (mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

for (const chave in estudante) {
    /*console.log(chave);
    console.log(estudante[chave]);*/
    const tipo = typeof estudante[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`${chave}: ${estudante[chave]}`);
    }
}