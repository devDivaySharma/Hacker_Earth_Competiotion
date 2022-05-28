let express = require('express');
let router = express();
const { product } = require('../controller/product');

router.get('/products',product);

module.exports = router