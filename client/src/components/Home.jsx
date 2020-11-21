import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [verified, setVerified] = useState([]);
  useEffect(() => {
    axios
      .get('/api/products/?verified=true')
      .then((response) => {
        setVerified(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <section id="intro">
        <div className="inner">
          <h1>Think Clean!</h1>
          <p>
            Scan a personal care product and get its ingredients, and let us
            direct you to a cleaner alternatives!
          </p>
          <Link to="/categories">Discover</Link>
        </div>
      </section>

      <section id="insturctions" className="inner">
        <h5>CLN + ALT Verified</h5>
        <div>
          <p>
            Our mission is to inform the way people think about ingredients and
            products they put on their bodies. We want to create a safer, more
            sustainable, more ethical personal care industry.
            <a>Read more</a>
          </p>
          <img src={require('../images/verified.svg')} />
        </div>
        <h5>How CLN + ALT works</h5>
        <div>
          <img src="" />
          <p>SCAN</p>
          <p>the barcode on a product</p>
        </div>
        <div>
          <img src="" />
          <p>LEARN</p>
          <p>about the ingredients</p>
        </div>
        <div>
          <img src="" />
          <p>FIND</p>
          <p>cleaner alternatives</p>
        </div>
      </section>

      <section id="categories" className="inner">
        <ul>
          {categories?.map((category) => (
            <li key={category._id}>
              <img src={category.image} />
              <p>{category.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="justVerified">
        <ul>
          {verified?.map((product) => (
            <li key={product._id}>
              <img src={product.image} />
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
