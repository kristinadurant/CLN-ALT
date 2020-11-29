const router = require('express').Router(),
  {
    getAllReviews,
    getSpecificReview,
    createReview,
    updateReview,
    deleteReview
  } = require('../../controllers/reviews');

router.get('/', getAllReviews);
router.get('/:id', getSpecificReview);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;
