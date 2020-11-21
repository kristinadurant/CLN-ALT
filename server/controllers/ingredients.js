const Ingredient = require('../db/models/ingredient'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a Ingredient
// ***********************************************//
exports.createIngredient = async (req, res) => {
  try {
    const ingredient = await new Ingredient(req.body);
    await ingredient.save();
    res.status(200).send(ingredient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get a specific Ingredient
// ***********************************************//

exports.getSpecificIngredient = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'not a valid ingredient' });

  try {
    const ingredient = await Ingredient.findOne({ _id });
    if (!ingredient)
      return res.status(400).json({ message: 'Ingredient not found' });
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get all Ingredients
//api/ingredients?banned=true --> filter: {source: chemical}
//
// ***********************************************//
exports.getAllIngredients = async (req, res) => {
  let filter = {};
  if (req.query.banned) filter.verified = false;
  try {
    const ingredients = await Ingredient.find(filter);
    res.json(ingredients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update an Ingredient
// ***********************************************//

exports.updateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findOne({
      _id: req.params.id
    });
    if (!ingredient)
      return res.status(404).json({ message: 'Ingredient not found' });
    updates.forEach((update) => (ingredient[update] = req.body[update]));
    await ingredient.save();
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findOneAndDelete({
      _id: req.params.id
    });
    if (!ingredient)
      return res.status(404).json({ message: 'Ingredient not found' });
    res.status(200).json({ message: 'Ingredient has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
