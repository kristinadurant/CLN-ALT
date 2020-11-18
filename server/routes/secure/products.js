const router = require('express').Router(),
  {
    createProduct,
    getSpecificProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
  } = require('../../controllers/products');

router.post('/', createProduct);
router.get('/:id', getSpecificProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
