const Post = require('../db/models/Post'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a post
// ***********************************************//
exports.createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
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
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get all posts
/******************************/
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
    const post = await Post.findOneAndDelete({ _id: req.params.id });
    if (!post) return res.status(404).json({ message: 'post not found' });
    res.status(200).json({ message: 'post has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
