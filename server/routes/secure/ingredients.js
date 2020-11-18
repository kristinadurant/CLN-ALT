const router = require('express').Router(),
  {
    getAllIngredients,
    getSpecificIngredient,
    createIngredient,
    updateIngredient,
    deleteIngredient
  } = require('../../controllers/ingredients');

router.get('/', getAllIngredients);
router.get('/:id', getSpecificIngredient);
router.post('/', createIngredient);
router.patch('/:id', updateIngredient);
router.delete('/:id', deleteIngredient);

module.exports = router;
