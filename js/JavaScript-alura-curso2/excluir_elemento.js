const nota = [10, 6, 8, 5.5, 10];

nota.pop();

const media = (nota[0] + nota[1] + nota[2] + nota[3]) / nota.length;

console.log(media.toFixed(2));