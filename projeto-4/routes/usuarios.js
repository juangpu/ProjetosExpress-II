var express = require('express');
var router = express.Router();
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
   
  var upload = multer({ storage: storage }) 

const usuarioController = require('../controllers/usuarioController');

router.get('/criar', usuarioController.registroForm);
router.post('/criar', upload.any(), [
  check("nome").isLength({min: 3}).withMessage("O nome do usuario tem que conter no minimo 3 caracteres"),
  check("email").isEmail().withMessage("Digite um e-mail valido"),
  check("senha").isLength({min: 6}).withMessage("A senha tem que conter no minimo 6 caracteres"),
  body("email").custom((email)=>{
    let usuario = JSON.parse(fs.readFileSync('usuarios.json'))

    return usuario.email != email
  }).withMessage("Usuario já existe")
], usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);

module.exports = router;