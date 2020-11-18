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
  await Ingredients.countDocuments({}, function (err, count) {
    console.log('Number of ingredients:', count);
  });
  await Post.countDocuments({}, function (err, count) {
    console.log('Number of posts:', count);
  });
  const userIdArray = [];

  for (let i = 0; i < 100; i++) {
    const cat = ['skincare', 'haircare', 'fragrance', 'bodycare', 'oralcare'];
    const product = new Product({
      title: `${faker.commerce.productName}`,
      description: faker.commerce.productDescription(),
      image: faker.image.avatar(),
      verified: Boolean(Math.round(Math.random())),
      // tags:,
      cat: `${faker.database.type(cat)}`
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
  }

  // for (let i = 0; i < 100; i++) {
  //   const ingredient = new Ingredient({
  //     name: `${faker.name.findName()}`,
  //     source: ,
  //     score: ,
  //     concern: ,
  //     note: ,
  //   });
  //   await ingredient.save();
  // }

  for (let i = 0; i < 100; i++) {
    const post = new Post({
      description: faker.lorem.paragraph(),
      completed: Boolean(Math.round(Math.random())),
      dueDate: faker.date.future(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await post.save();
  }
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Task.countDocuments({}, function (err, count) {
    console.log('Number of tasks:', count);
  });
};

dbReset();
