function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfo = function () {
        return `${this.nome}, ${this.email}`;
    }
};

const novoUser = new User("João Victor", "j@j.com");
console.log(novoUser.exibirInfo());