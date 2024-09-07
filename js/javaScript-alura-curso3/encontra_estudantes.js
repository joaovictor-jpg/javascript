const estudantes = require("./estudante.json");


function buscarInformacaso(lista, chave, valor) {
    return    lista.find((estudante) => {
        return estudante[chave].includes(valor);
    })
}


const estudanteEncontrada = buscarInformacaso(estudantes, "nome", "João");
console.log(estudanteEncontrada);

const telefoneEstudante = buscarInformacaso(estudantes, "telefone", "9045673092");
console.log(telefoneEstudante);