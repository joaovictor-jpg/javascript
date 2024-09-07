const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const media = [7, 4.5, 8, 7.5];

const reprovador = alunos.filter((_, index) => (
    media[index] < 7
));

console.log(reprovador);