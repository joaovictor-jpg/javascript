export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome,
            this.#email = email,
            this.#nascimento = nascimento,
            this.#role = role || "estudante",
            this.#ativo = ativo
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        this.#role = role;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(ativo) {
        this.#ativo = ativo;
    }

    exibirInfo() {
        return `${this.#nome}, ${this.#email}`;
    }

}
