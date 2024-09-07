import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErros.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helps.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version("0.0.1")
    .option("-t --texto <string>", "Caminho do texto a ser processado")
    .option("-d, --destino <string>", "Caminho da pasta onde salvar o arquivo de resultado")
    .action((options) => {
        const { texto, destino } = options;
        if (!texto || !destino) {
            console.log(chalk.red("Error: Favor inserir caminho de origem e destino"));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processoArquivo(caminhoTexto, caminhoDestino);
            console.log(chelk.blue("Texto processado com sucesso!"));
        } catch (erro) {

        }
    })

program.parse();

function processoArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch (erro) {
            console.log(trataErros(erro));
        }
    })
}


async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.blue("Arquivo criado"));
    } catch (erro) {

    }
}

/*function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras);

    fs.promises.writeFile(arquivoNovo, textoPalavras)
        .then(() => {
            console.log("Arquivo criado");
        })
        .catch((erro) => { throw erro })
        .finally(() => console.log("Operação finalizada"));
}*/
