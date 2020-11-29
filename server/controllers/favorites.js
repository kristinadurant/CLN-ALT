const Favorite = require('../db/models/favorite'),
  mongoose = require('mongoose');

exports.deleteFavoritesForProduct = async (favorites = []) => {
  const favoriteDeletes = favorites.map(async (favorite) => {
    await Favorite.findByIdAndDelete(favorite._id);
  });

  await Promise.all(favoriteDeletes);
};

// ANCHOR CREATE Favorite
exports.createFavorite = async (req, res) => {
  try {
    const favorite = await new Favorite(req.body);
    await favorite.save();
    res.status(200).send(favorite);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//ANCHOR GET A SPECIFIC Favorite
exports.getSpecificFavorite = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({
      message: 'Uh Oh, Not a valid favorite'
    });
  try {
    const favorite = await Favorite.findOne({
      _id
    });
    if (!favorite)
      return res.status(400).json({
        message: 'Uh Oh! Favorite not Found, double check your spelling!'
      });
    res.status(200).json(favorite);
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

//ANCHOR GET ALL Favorites ///////////

exports.getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find(req.query).sort({ createdAt: -1 });
    // await favorites
    //   .populate({ path: 'product', select: ['title', 'image'] })
    //   .execPopulate();
    res.json(favorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//ANCHOR UPDATE A SPECIFIC Favorite /////
exports.updateFavorite = async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const favorite = await Favorite.findOne({
      _id: req.params.id
    });
    if (!favorite)
      return res.status(404).json({ message: 'Uh Oh! :( Favorite Not Found' });
    updates.forEach((update) => (favorite[update] = req.body[update]));
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json('Error: ' + err);
  }
};

//ANCHOR DELETE A SPECIFIC Favorite /////
exports.deleteFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findByIdAndDelete({
      _id: req.params.id
    });
    if (!favorite)
      return res.status(404).json({ message: 'Uh Oh! :( Favorite Not Found' });
    res.status(200).json({ message: 'Favorite has been Deleted!' });
  } catch (error) {
    res.status(400).json('Error' + err);
  }
};
