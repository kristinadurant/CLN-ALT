const { default: Axios } = require('axios');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/index');

const Product = require('../models/product'),
  User = require('../models/user'),
  Ingredient = require('../models/ingredient'),
  Review = require('../models/Review'),
  Favorite = require('../models/Favorite'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  console.log(collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Review.countDocuments({}, function (err, count) {
    console.log('Number of reviews:', count);
  });
  await Favorite.countDocuments({}, function (err, count) {
    console.log('Number of favorites:', count);
  });
  const userIdArray = [];
  const ingredientIdArray = [];
  const productIdArray = [];

  /* ==============
    USER
===============*/
  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      avatar: faker.image.avatar()
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  /* ==============
    REVIEWS
===============*/
  for (let i = 0; i < 100; i++) {
    const review = new Review({
      rate: Number(Math.ceil(Math.random() * 5)),
      description: faker.lorem.paragraph(),
      user: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      product: productIdArray[Math.floor(Math.random() * productIdArray.length)]
    });
    await review.save();
  }
  /* ==============
    FAVORITES
===============*/
  for (let i = 0; i < 100; i++) {
    const favorite = new Favorite({
      user: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      product: productIdArray[Math.floor(Math.random() * productIdArray.length)]
    });
    await favorite.save();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });

  await Review.countDocuments({}, function (err, count) {
    console.log('Number of reviews:', count);
  });
  await Favorite.countDocuments({}, function (err, count) {
    console.log('Number of favorites:', count);
  });
};

dbReset();
