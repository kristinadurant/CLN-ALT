const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    rate: {
      type: Number,
      min: [1, 'Rating cannot be bellow 1'],
      max: [5, 'Rating cannot be above 5']
    },
    description: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Review must have an author']
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Review must belong to a product']
    }
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
