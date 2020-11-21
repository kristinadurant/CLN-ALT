const router = require('express').Router(),
  {
    getAllCategories,
    getSpecificCategory,
    createCategory,
    updateCategory,
    deleteCategory
  } = require('../../controllers/categories');

router.get('/', getAllCategories);
router.get('/:id', getSpecificCategory);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
