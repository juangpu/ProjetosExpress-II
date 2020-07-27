let produtoController = {
    viewForm: (req, res)=> {
        return res.render('produto')
    },
    salvarForm: (req, res)=> {
        // let { nomeProduto, precoProduto } = req.body;
        // res.send("O produto " + nomeProduto + " foi criado com sucesso!")
        res.redirect ('/produtos/sucesso');
    },
    sucesso: (req, res)=> {
        res.render('sucesso')
    },
    viewAttForm: (req, res)=> {
        let {id} = req.params;
        let produtos = [
            // UMA DEMOSNTRAÇÃO DE COMO SERIA NO BANCO DE DADOS
            {id: 1, nome: "Produto X", preco: 10},
            {id: 2, nome: "Produto Y", preco: 10}   
        ]
        // res.send("Eu quero editar o produto " + id);
        res.render('editarProduto', {produto: produtos[id]});
    },
    editar: (req, res)=> {
        let { nomeProduto, precoProduto } = req.body
        res.send("Você editou o produto " + nomeProduto );
    },
    listarProdutos: (req, res)=> {
        let produtos = [
            {id: 1, nome: "Produto X", preco: 10},
            {id: 2, nome: "Produto Y", preco: 10}   
        ]
        res.render('listaProdutos', {listarProdutos: produtos});
    },
    deletarProduto: (req, res)=> {
        let {id} = req.params
        res.send("Estou deletando o produto com o id: " + id)
    }
}

module.exports = produtoController;