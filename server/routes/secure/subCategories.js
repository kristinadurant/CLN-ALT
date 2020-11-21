const router = require('express').Router(),
  {
    getAllSubCategories,
    getSpecificSubCategory,
    createSubCategory,
    updateSubCategory,
    deleteSubCategory
  } = require('../../controllers/subCategories');

router.get('/', getAllSubCategories);
router.get('/:id', getSpecificSubCategory);
router.post('/', createSubCategory);
router.put('/:id', updateSubCategory);
router.delete('/:id', deleteSubCategory);

module.exports = router;
