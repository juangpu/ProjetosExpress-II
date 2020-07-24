let indexController = {
    viewController: (req, res)=>{
        let {nome, idade} = req.query;
        res.send("Olá " + nome + ", parabens pelos seus " + idade + " anos!");
    },
    contatoController: (req, res)=>{
        let {nome2} = req.query;
        res.render('contato', {nomeUsuario: nome2});
    }
}

module.exports = indexController;