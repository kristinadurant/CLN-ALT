const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    trim: true
  },
  verified: {
    type: Boolean,
    default: false,
    required: true
  },
  ingredients: [IngredientSchema],
  tags: {
    type: String,
    enum: ['vegan', 'paraben_free', 'cruelty_free', 'sustainable', 'non_gmo']
  },
  category: {
    type: String,
    enum: ['skincare', 'haircare', 'fragrance', 'bodycare', 'oralcare'],
    required: true
  },
  subcatergory: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
