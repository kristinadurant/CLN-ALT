const Category = require('../db/models/category'),
  mongoose = require('mongoose');

//ANCHOR CREATE Category
exports.createCategory = async (req, res) => {
  try {
    const category = await new Category(req.body);
    await category.save();
    res.status(200).send(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR GET A SPECIFIC Category
exports.getSpecificCategory = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid id'
    });
  try {
    const category = await Category.findOne({
      _id
    });
    if (!category)
      return res.status(400).json({
        message: 'Uh Oh! Category not Found, double check your spelling!'
      });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL Categories ///////////

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find(req.query).sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC Category /////
exports.updateCategory = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const category = await Category.findOne({
      _id: req.params.id
    });
    if (!category)
      return res.status(404).json({ message: 'Uh Oh! :( Category Not Found' });
    updates.forEach((update) => (category[update] = req.body[update]));
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC Category /////
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete({
      _id: req.params.id
    });
    if (!category)
      return res.status(404).json({ message: 'Uh Oh! :( Category Not Found' });
    res.status(200).json({ message: 'Category has been Deleted!' });
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};
