const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const session = require('express-session');

let usuarioJSON = path.join("usuarios.json");
let usuarioController = {
    registroForm: (req, res)=> {
        res.render('registroUsuario')
    },
    salvarForm: (req, res)=> {
        let listaDeErrors = validationResult(req);
        
        if(listaDeErrors.isEmpty()){
            let { nome, email, senha } = req.body;
            let { files } = req
            let senhaC = bcrypt.hashSync(senha, 10);
            let usuario = JSON.stringify({ nome, email, senha: senhaC, avatar: files[0].originalname });
    
            fs.writeFileSync(usuarioJSON, usuario);
            return res.send('Usuario cadastrado com sucesso!');
        } else {
            return res.render('registroUsuario', {errors: listaDeErrors.errors})
        }
    },

    loginForm: (req, res)=> {
        res.render('login')
    },
    logarUsuario: (req, res)=>{
        let { email, senha } = req.body;
        let usuarioSalvo = fs.readFileSync(usuarioJSON, {encoding: 'utf-8'});
        usuarioSalvo = JSON.parse(usuarioSalvo);

        if(email != usuarioSalvo.email){
           return res.send('Usuario Invalido')
        }

        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.send('Senha Invalida')
        }

        req.session.usuario = usuarioSalvo;

        res.redirect("/");
    }
}

module.exports = usuarioController