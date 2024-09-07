const animais = require('./animais.json');

console.log("Teste: ", animais.animais[2]);

animais.animais.push({
    id: 4,
    nome: "Macaco",
    tipo: "Mamifero",
    habitat: "África"
})

console.log(animais.animais);

animais.animais[3].habitat = "savanas";

console.log(animais.animais);

animais.animais.pop();

console.log(animais.animais);

const stringDeAnimais = JSON.stringify(animais);

console.log(stringDeAnimais);