if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/index');

const Product = require('../models/product'),
  User = require('../models/user'),
  Ingredient = require('../models/ingredient'),
  Post = require('../models/post'),
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

  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Ingredient.countDocuments({}, function (err, count) {
    console.log('Number of ingredients:', count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts:', count);
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
    INGREDIENTS
===============*/
  for (let i = 0; i < 100; i++) {
    const ingredient = new Ingredient({
      name: `${faker.name.findName()}`,
      verified: Boolean(Math.round(Math.random())),
      score: Number(Math.ceil(Math.random() * 10)),
      description: faker.lorem.sentence()
    });
    await ingredient.save();
    ingredientIdArray.push(ingredient._id);
  }

  /* ==============
    PRODUCT
===============*/
  for (let i = 0; i < 100; i++) {
    const cat = {
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
    const tags = [
      'vegan',
      'cruelty_free',
      'gmo_free',
      'sulfate_free',
      'phthalate_free',
      'paraben_free'
    ];
    const product = new Product({
      title: `${faker.commerce.productName()}`,
      description: faker.commerce.productDescription(),
      image: faker.image.avatar(),
      verified: Boolean(Math.round(Math.random())),
      tags: tags,
      category: Object.keys(cat)[Math.floor(Math.random() * 6)],
      ingredients: ingredientIdArray.splice(
        Math.floor(Math.random() * ingredientIdArray.length)
      )
    });
    await product.save();
    productIdArray.push(product._id);
  }
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
    POST
===============*/
  for (let i = 0; i < 100; i++) {
    const post = new Post({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      image: faker.image.image()
    });
    await post.save();
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

  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Ingredient.countDocuments({}, function (err, count) {
    console.log('Number of ingredients:', count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts:', count);
  });
  await Review.countDocuments({}, function (err, count) {
    console.log('Number of reviews:', count);
  });
  await Favorite.countDocuments({}, function (err, count) {
    console.log('Number of favorites:', count);
  });
};

dbReset();
