var express = require('express');
var controller = require('../controllers/produtosController')
var router = express.Router();

router.get('/the100', controller.the100);
router.get('/society', controller.theSociety);
router.get('/OuterBanks', controller.OuterBanks);

module.exports = router;