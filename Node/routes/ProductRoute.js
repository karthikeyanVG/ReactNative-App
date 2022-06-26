const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
// const checkAuth = require('../middleware/CheckAuth')

//post product
router.post('/insertProduct',ProductController.insertProduct);
//Get product
router.route("/").get(ProductController.get_product);

//router.post('/filter',ProductController.filter);

router.get('/:code',ProductController.getProductByCode);

module.exports = router;