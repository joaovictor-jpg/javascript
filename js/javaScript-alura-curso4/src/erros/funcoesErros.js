import chalk from "chalk";

export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        throw new Error(chalk.red('Arquivo não encontrado'));
    } else {
        return chalk.red('Erro na aplicação');
    }
}