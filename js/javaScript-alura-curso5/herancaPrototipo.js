const user = {
    nome: "João Victor",
    email: "j@j.com",
    nascimento: "2000-03-16",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: "Neuda",
    email: "n@m.com",
    nascimento: "1950-03-16",
    role: "estudante",
    ativo: true,
    criarCurso: function () {
        console.log("Curso criado");
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();