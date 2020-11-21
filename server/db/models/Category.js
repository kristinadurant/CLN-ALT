const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  subcategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory'
    }
  ]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
