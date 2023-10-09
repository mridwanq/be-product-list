const router = require('express').Router();
const { productController } = require('../controllers');
const { productMulter } = require('../middlewares/multers');

// get all products
router.get('/', productController.getAllProducts);

// get product by id
router.get('/:id', productController.getProductById);

// post new product
router.post(
  '/',
  productMulter.productImageUploader().single('productImage'),
  productController.createProduct
);

module.exports = router;
