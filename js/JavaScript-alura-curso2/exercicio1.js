const numeros = [1, 3, 7, 8, 5];

numeros.splice(0, 1, 2);

console.log(numeros);

const numero = numeros.shift();
const dobrarNumero = numero * numero;

numeros.splice(0, 0, dobrarNumero);

console.log(numeros);