const Product = require('../db/models/product'),
  mongoose = require('mongoose');

exports.createProduct = async (req, res) => {
  try {
    const post = await new Product({
      title,
      description,
      image,
      verified,
      ingredients,
      tags,
      category,
      subcategory
    });
    await product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
