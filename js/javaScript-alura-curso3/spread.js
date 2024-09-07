const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "1234567891011",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["21973711216", "21973711216"],
    enderecos: [{
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

function exibirTelefone(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

exibirTelefone(...estudante.telefones);

const dadosEnvio = {
    nome: estudante.nome,
    ...estudante.enderecos[0]
}


console.log(dadosEnvio);