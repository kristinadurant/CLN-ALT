const router = require('express').Router(),
  {
    getAllFavorites,
    getSpecificFavorite,
    createFavorite,
    updateFavorite,
    deleteFavorite
  } = require('../../controllers/favorites');

router.get('/', getAllFavorites);
router.get('/:id', getSpecificFavorite);
router.post('/', createFavorite);
router.put('/:id', updateFavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;
