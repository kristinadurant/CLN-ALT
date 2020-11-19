if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config/index');

const Product = require('../models/product'),
  User = require('../models/user'),
  Ingredients = require('../models/ingredient'),
  Post = require('../models/post'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  console.log(collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
  console.log(collections);
  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Ingredients.countDocuments({}, function (err, count) {
    console.log('Number of ingredients:', count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts:', count);
  });
  const userIdArray = [];

  for (let i = 0; i < 100; i++) {
    const cat = ['skincare', 'haircare', 'fragrance', 'body care', 'oral care'];
    const product = new Product({
      title: `${faker.commerce.productName()}`,
      description: faker.commerce.productDescription(),
      image: faker.image.avatar(),
      verified: Boolean(Math.round(Math.random())),
      // tags:,
      category: cat[Math.floor(Math.random() * cat.length)]
    });
    await product.save();
  }
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

  for (let i = 0; i < 100; i++) {
    const source = ['natural', 'chemical'];
    const concern = [
      'Allergies/Immunotoxicity',
      'Endocrine Disruption',
      'Contamination Concerns',
      'Irritation (Skin, Eyes, or Lungs)',
      'Miscellaneous',
      'Occupational Hazards',
      'Persistence & Bioaccumulation',
      'Use Restrictions',
      'Multiple, Additive Exposure Sources',
      'Organ System Toxicity(Non-Reproductive)',
      'Neurotoxicity',
      'Ecotoxicology',
      'Cancer',
      'Developmental & Reproductive Toxicity',
      'Enhanced Skin Absorption'
    ];
    const opts = ['natural', 'chemical'];
    const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ingredient = new Ingredients({
      name: `${faker.name.findName()}`,
      source: source[Math.floor(Math.random() * source.length)],
      score: Number(Math.ceil(Math.random() * scores.length)),
      note: faker.lorem.sentence(),
      function: opts[Math.floor(Math.random() * opts.length)]
    });
    ingredient.concerns.push(
      concern[Math.floor(Math.random() * concern.length)]
    );
    await ingredient.save();
  }

  for (let i = 0; i < 100; i++) {
    const post = new Post({
      title: faker.lorem.sentence(),
      text: faker.lorem.paragraph(),
      image: faker.image.image()
      // owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await post.save();
  }
  await Product.countDocuments({}, function (err, count) {
    console.log('Number of products:', count);
  });
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Ingredients.countDocuments({}, function (err, count) {
    console.log('Number of ingredients:', count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts:', count);
  });
};

dbReset();
