const SubCategory = require('../db/models/SubCategory'),
  mongoose = require('mongoose');

//ANCHOR CREATE SubCategory
exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = await new SubCategory(req.body);
    await subCategory.save();
    res.status(200).send(subCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR GET A SPECIFIC SubCategory
exports.getSpecificSubCategory = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid id'
    });
  try {
    const subCategory = await SubCategory.findOne({
      _id
    });
    if (!subCategory)
      return res.status(400).json({
        message: 'Uh Oh! SubCategory not Found, double check your spelling!'
      });
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL SubCategories ///////////

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find(req.query).sort({
      createdAt: -1
    });
    res.json(subCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC SubCategory /////
exports.updateSubCategory = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const subCategory = await SubCategory.findOne({
      _id: req.params.id
    });
    if (!subCategory)
      return res
        .status(404)
        .json({ message: 'Uh Oh! :( SubCategory Not Found' });
    updates.forEach((update) => (subCategory[update] = req.body[update]));
    await subCategory.save();
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC SubCategory /////
exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete({
      _id: req.params.id
    });
    if (!subCategory)
      return res
        .status(404)
        .json({ message: 'Uh Oh! :( SubCategory Not Found' });
    res.status(200).json({ message: 'SubCategory has been Deleted!' });
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};
