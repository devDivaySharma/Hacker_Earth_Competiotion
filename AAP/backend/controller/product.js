let productService = require('../service/product');

let product = (req,res) => {
    productService.productService(req,res).then((result) => {
        res.status(200).json({'success': true,data : result}); 
    }).catch((err) => {
        res.status(404).json({'success': false,data : err}); 
    });
}

module.exports = { product }