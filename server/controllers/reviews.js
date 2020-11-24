const Review = require('../db/models/review'),
  mongoose = require('mongoose');

//ANCHOR CREATE REVIEW
exports.createReview = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    res.status(200).send(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR GET A SPECIFIC REVIEW
exports.getSpecificReview = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid review'
    });
  try {
    const review = await Review.findOne({
      _id
    });
    if (!review)
      return res.status(400).json({
        message: 'Uh Oh! Review not Found, double check your spelling!'
      });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL Reviews ///////////

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC review /////
exports.updateReview = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const review = await Review.findOne({
      _id: req.params.id
    });
    if (!review)
      return res.status(404).json({ message: 'Uh Oh! :( Review Not Found' });
    updates.forEach((update) => (review[update] = req.body[update]));
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC REVIEW /////
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete({
      _id: req.params.id
    });
    if (!review)
      return res.status(404).json({ message: 'Uh Oh! :( Review Not Found' });
    res.status(200).json({ message: 'Review has been Deleted!' });
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};
