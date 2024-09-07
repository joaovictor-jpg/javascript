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
    }]
}


estudante.endereco.push({
    rua: "Vila da Penha",
    numero: "265",
    complemento: "26563"
})

console.log(estudante);