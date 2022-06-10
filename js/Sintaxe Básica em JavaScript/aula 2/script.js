//TIPOS DE VÁRIAVES PRIMITIVOS

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = 'João';
console.log(typeof(nome));

var variavel = 2;
variavel = 3;
console.log(variavel);

let variavelLet = 'c';
variavelLet = 'b';
console.log(variavelLet);

const variavelCosnt = 'João';
//variavelCosnt = 'Roberto';
console.log(variavelCosnt)

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();


/* PARA FAZEMOS COMPARAÇÃO DE VALORES EM JAVASCRIPT USAMOS '=='*/
/* COMPARAÇÃO IDÊNTICA '===' COMPARA OS TIPOS E O VALOR */