const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (const nota of notas) {
    somaDasNotas += nota;
};

console.log(somaDasNotas / notas.length);