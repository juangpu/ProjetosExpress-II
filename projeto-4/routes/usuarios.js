var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');

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
router.post('/criar', upload.any(), usuarioController.salvarForm);

router.get('/login', usuarioController.loginForm);
router.post('/login', usuarioController.logarUsuario);

module.exports = router;