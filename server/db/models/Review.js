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

// reviewSchema.index({ product: 1, user: 1 }, { unique: true });

// reviewSchema.statics.calcAverageRatings = async function(productId) {

//     const stats = await this.aggregate([
//       {
//         $match: { product: productId }
//       },
//       {
//         $group: {
//           _id: '$product',
//           nRatings: { $sum: 1 },
//           avgRating: { $avg: '$rating' }
//         }
//       }
//     ]);
//     console.log(stats);
//     await Product.findByIdAndUpdate(productId, {
//         raitingsQuantity: stats[0].nRatings,
//         ratingsAverage: stats[0].avgRating
//     });
// };

// reviewSchema.post('save', function() {
//     this.constructor.calcAverageRatings(this.product);
// });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
