var express = require('express');
var controller = require('../controllers/produtosController')
var router = express.Router();

router.get('/pagina-series', controller.series);

module.exports = router;