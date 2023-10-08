const router = require('express').Router();
const { productController } = require('../controllers');
const { productMulter } = require('../middlewares/multers');

// get all products
router.get('/', productController.getAllProducts);

// post new product
router.post(
  '/',
  productMulter.productImageUploader().single('productImage'),
  productController.createProduct
);
module.exports = router;
