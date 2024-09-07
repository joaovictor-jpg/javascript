const notas = [10, 6.5, 8, 7.5];

const notasAtualizadas = notas.map(nota => nota >= 10 ? nota : nota + 1);

console.log(notasAtualizadas);