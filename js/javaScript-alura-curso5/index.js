import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUsuario = new User("João Victor", "j@j.com", "2000-03-16");
console.log(novoUsuario);
console.log(novoUsuario.exibirInfo());

novoUsuario.nome = "Teste";

console.log(novoUsuario.nome);