const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    source: {
      type: String
    },
    function: {
      type: String
    },
    score: {
      type: Number,
      min: 1,
      max: 10
    },
    concern: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
