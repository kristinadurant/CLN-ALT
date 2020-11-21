const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
