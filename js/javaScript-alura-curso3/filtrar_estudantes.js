const estudantes = require("./estudante.json");

function filtrarPorPropriedade(lista, propriedade) {
    return lista.filter((item) => {
        return !item.endereco.hasOwnProperty(propriedade);
    })
}

const listaEndereco = filtrarPorPropriedade(estudantes, "cep");
console.log(listaEndereco);