const Ingredient = require('../db/models/ingredient'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a Ingredient
// ***********************************************//
exports.createIngredient = async (req, res) => {
  try {
    const ingredient = await new Ingredient({
      ...req.body,
      owner: req.user._id
    });
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
    const ingredient = await Ingredient.findOne({ _id, owner: req.user._id });
    if (!ingredient)
      return res.status(400).json({ message: 'Ingredient not found' });
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Get all Ingredients
// /ingredients?completed=true
// /ingredients?limit=10&skip=10
// /ingredients?sortBy=createdAt:asc
// /ingredients?sortBy=dueDate:desc
// ***********************************************//
exports.getAllIngredients = async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';
  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':'); // =>>> ['dueDate', 'desc']
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'ingredients',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.status(200).json(req.user.ingredients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update a Ingredient
// ***********************************************//

exports.updateIngredient = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const ingredient = await Ingredient.findOne({
      _id: req.params.id,
      owner: req.user._id
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
      _id: req.params.id,
      owner: req.user._id
    });
    if (!ingredient)
      return res.status(404).json({ message: 'Ingredient not found' });
    res.status(200).json({ message: 'Ingredient has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
