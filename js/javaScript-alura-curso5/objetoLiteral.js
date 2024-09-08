const user = {
    nome: "João Victor",
    email: "j@j.com",
    nascimento: "2000-03-16",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

user.exibirInfos();

const exibir = user.exibirInfos;

const exibirNome = exibir.bind(user);

exibirNome();