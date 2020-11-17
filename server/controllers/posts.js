const Post = require('../db/models/post'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a post
// ***********************************************//
exports.createPost = async (req, res) => {
  try {
    const post = await new Post({
      title,
      image,
      text
    });
    await post.save();
    res.status(200).send(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get a specific post
// ***********************************************//

exports.getSpecificPost = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not a valid post' });

  try {
    const post = await Post.findOne({ _id });
    if (!post) return res.status(400).json({ message: 'Post not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get all posts
// /tasks?limit=10&skip=10
// /tasks?sortBy=createdAt:asc
// ***********************************************//
// exports.getAllPosts = async (req, res) => {
//   const sort = {};

//   if (req.query.sortBy) {
//     const parts = req.query.sortBy.split(':');
//     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
//   }
//   try {
//     await req.user
//       .populate({
//         path: 'posts',
//         match,
//         options: {
//           limit: parseInt(req.query.limit),
//           skip: parseInt(req.query.skip),
//           sort
//         }
//       })
//       .execPopulate();
//     res.status(200).json(req.posts);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// ***********************************************//
// Update a post
// ***********************************************//

exports.updatePost = async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const post = await Post.findOne({
      _id: req.params.id
    });
    if (!post) return res.status(404).json({ message: 'post not found' });
    updates.forEach((update) => (post[update] = req.body[update]));
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Delete a post
// ***********************************************//
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!post) return res.status(404).json({ message: 'post not found' });
    res.status(200).json({ message: 'post has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
