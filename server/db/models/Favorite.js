const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'favorite must have an author']
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'favorite must belong to a product']
    }
  },
  { timestamps: true }
);

// favoriteSchema.index({ product: 1, user: 1 }, { unique: true });

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
