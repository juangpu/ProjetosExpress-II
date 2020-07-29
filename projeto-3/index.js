const fs = require('fs');
const path = require('path');
let caminhoArquivo = path.join('prova.txt');

// ESCREVENDO ARQUIVOS
fs.writeFileSync(caminhoArquivo, "Prova 2");
fs.appendFileSync(caminhoArquivo, " Prova 3");

// LENDO ARQUIVOS
let conteudo = fs.readFileSync(caminhoArquivo, {encoding: 'utf-8'});
console.log(conteudo);

// informações que o usuario colocar no formulario em produtos/criar, serão salvas em forma de texto no arquivo produtos.JSON, graças ao pacote FILESYSTEM.
