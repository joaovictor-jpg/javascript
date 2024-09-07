const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let index = 0; index < notas.length; index++) {
    somaDasNotas += notas[index];
};

console.log(somaDasNotas / notas.length);