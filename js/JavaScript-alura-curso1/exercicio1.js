let nome = "João";
let idade = "24";
let eMasculino = true;
let sobreNome = "Victor";
let nomeCompleto = nome + sobreNome;
let tamplateString = `nome do usuário: ${nomeCompleto}`;
let idadeENome = `Nome: ${nome}, Idade: ${idade}`;

console.log(idadeENome);
console.log( tamplateString);

sobreNome = "Madeira";
tamplateString = `${nome} ${sobreNome}`;
console.log(tamplateString);

console.log(nome);
console.log(idade);
console.log(eMasculino);