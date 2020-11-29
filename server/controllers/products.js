const Product = require('../db/models/product'),
  mongoose = require('mongoose'),
  cloudinary = require('cloudinary').v2;

const { deleteReviewsForProduct } = require('../controllers/reviews');
const { deleteFavoritesForProduct } = require('../controllers/favorites');

//ANCHOR CREATE PRODUCT  .CREATEPRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body);
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR GET A SPECIFIC PRODUCT .GETSPECIFICPRODUCT
exports.getSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid id'
    });
  try {
    const product = await Product.findOne({
      _id
    })
      .populate('ingredients')
      .populate({
        path: 'reviews',
        populate: {
          path: 'user',
          model: 'User'
        }
      });

    if (!product)
      return res.status(400).json({
        message: 'Uh Oh! Product not Found, double check your spelling!'
      });
    res.status(200).json({
      ...product.toObject(),
      reviews: product.reviews
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL PRODUCTS .getAllProducts///////////

exports.getAllProducts = async (req, res) => {
  let limit = parseInt(req.query.limit);
  let match = req.query;
  if (req.query.verified) match.verified = req.query.verified === true;
  try {
    const products = await Product.find(match)
      .limit(limit)
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC PRODUCT /////
exports.updateProduct = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const product = await Product.findOne({
      _id: req.params.id
    });
    if (!product)
      return res.status(404).json({ message: 'Uh Oh! :( Product Not Found' });
    updates.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC PRODUCT /////
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('reviews')
      .populate('favorites');

    if (!product)
      return res.status(404).json({ message: 'Uh Oh! :( Product Not Found' });

    await Product.findByIdAndDelete({
      _id: req.params.id
    });

    await Promise.all([
      deleteReviewsForProduct(product.reviews),
      deleteFavoritesForProduct(product.favorites)
    ]);

    res.status(200).json({ message: 'Product has been Deleted!' });
    return;
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};

//UPLOAD IMAGE /////
exports.uploadImage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Uh Oh! :( Product Not Found' });
    } else {
      const response = await cloudinary.uploader.upload(
        req.files.avatar.tempFilePath
      );
      product.image = response.secure_url;
      await product.save();
      res.json(product);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
