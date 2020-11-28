const router = require('express').Router(),
  {
    createProduct,
    getSpecificProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    uploadImage
  } = require('../../controllers/products');

router.post('/', createProduct);
router.get('/:id', getSpecificProduct);
router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.post('/:id', uploadImage);

module.exports = router;
