const router = require('express').Router(),
  {
    createPost,
    getAllPosts,
    getSpecificPost,
    updatePost,
    deletePost
  } = require('../../controllers/posts');

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getSpecificPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
