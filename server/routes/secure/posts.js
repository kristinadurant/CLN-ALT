const router = require('express').Router(),
  {
    createPost,
    getSpecificPost,
    updatePost,
    deletePost
  } = require('../../controllers/posts');

router.post('/', createPost);
router.get('/:id', getSpecificPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
