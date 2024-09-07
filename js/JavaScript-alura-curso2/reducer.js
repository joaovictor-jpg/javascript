const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    return somaDasNotas / listaDeNotas.length;
}

console.log(calcularMedia(salaJS));
console.log(calcularMedia(salaJava));
console.log(calcularMedia(salaPython));

const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
 
console.log(soma)