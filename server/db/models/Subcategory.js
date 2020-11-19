const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  title: {
    type: String
  }
});

const Subcategory = mongoose.model('Subcategory', subCategorySchema);

module.exports = Subcategory;
