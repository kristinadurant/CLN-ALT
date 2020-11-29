const mongoose = require('mongoose');

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

productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product'
});

productSchema.pre('findByIdAndDelete', async function (next) {
  console.log('got to reviews');
  // await this.model('Review').deleteMany({ product: this._id });
  console.log('got to favorites');
  // await Favorite.deleteMany({ product: this._id });
  console.log('done');
  next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
