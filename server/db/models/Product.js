const mongoose = require('mongoose');

let categories = {
  skincare: ['moisturizers', 'cleansers', 'masks', 'eyecare'],
  haircare: [
    'shampoo',
    'conditioner',
    'hairmask',
    'hair oils/serums',
    'hair spray',
    'hair dye'
  ],
  'body care': [
    'sunscreen',
    'sun tanners',
    'sun oils',
    'bodywash',
    'body lotion',
    'hand soap',
    'hand sanitizer'
  ],
  fragrance: ['perfume', 'cologne'],
  'oral care': ['toothpaste', 'mouthwash', 'teeth whitening', 'lip balm'],
  'baby care': ['baby wipes', 'baby cleaners', 'baby creams', 'baby powder']
};

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
      // unique: true
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
          'sulfate_free',
          'gmo_free',
          'phthalate_free'
        ]
      }
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory'
    },
    ingredients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
      }
    ]
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
