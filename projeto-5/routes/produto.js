var express = require('express');
var router = express.Router();
const logDBMiddleware = require('../middlewares/logDB');
const produtoController = require('../controllers/produtoController');

router.get('/product', logDBMiddleware, produtoController.index);

module.exports = router;