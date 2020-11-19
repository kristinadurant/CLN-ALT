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
    // ingredients: [IngredientSchema],
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
      enum: Object.keys(categories),
      required: true,
      trim: true,
      lowercase: true
    },
    subcategory: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return categories[this.category].includes(v);
        },
        message: 'Pick an existing subcategory'
      }
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
    timestamps: true
  }
);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;
