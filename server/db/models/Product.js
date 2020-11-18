const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
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
    tags: [
      {
        type: String,
        enum: [
          'vegan',
          'paraben_free',
          'cruelty_free',
          'sustainable',
          'non_gmo'
        ]
      }
    ],
    category: {
      type: String,
      enum: ['skincare', 'haircare', 'fragrance', 'bodycare', 'oralcare'],
      required: true
    },
    subcategory: {
      type: String,
      required: true
    },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true
      }
    ]
  },
  {
    timestamp: true
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
