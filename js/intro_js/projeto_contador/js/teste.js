// declarando váriavel e constante.
var preco = 2;
var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;

// Funções
function soma(a, b) {
    return a + b; // 8
}

console.log(soma(3, 5));

// Trabalhando com NODEJS no terminal.
console.log("Olá Mundo");

function returnEvenValues(array) {
    let evenValues = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenValues.push(array[i]);
        } else {
            console.log(array[i], 'O número não é par.')
        }
    }
    console.log('Os números pares são: ', evenValues);
}

let array = [1, 2, 4, 5, 7, 8];
returnEvenValues(array);