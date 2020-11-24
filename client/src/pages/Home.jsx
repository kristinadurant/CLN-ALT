import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Home = () => {
  const [verified, setVerified] = useState([]);
  const { categories } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/products/?verified=true&limit=10')
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
        <h5>Browse by Category</h5>
        <ul>
          {categories?.map((category) => (
            <li key={category._id}>
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="justVerified">
        <h5>Just Verified</h5>
        <ul>
          {verified?.map((product) => (
            <li key={product._id}>
              <img src={product.image} />
              <p>{product.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="doctors">
        <h5>Doctor Review Board</h5>
        <p>
          We're serious about personal care honestly, so we asked 20 of the most
          trusted experts from doctors...
        </p>
        <a>Read more</a>
        <div>
          <div>
            <img />
            <p className="name">Dr. Mia Chenna</p>
            <p className="title">Dermatologist</p>
          </div>
          <div>
            <img />
            <p className="name">Dr. Wendy Lee</p>
            <p className="title">Doctor</p>
          </div>
          <div>
            <img />
            <p className="name">Dr. Dara Chenna</p>
            <p className="title">Cosmetologist</p>
          </div>
        </div>
      </section>

      <section id="social">
        <h5>FOLLOW @CLNALT ON IG</h5>
        <div></div>
        <p>We're toxic-free but our emails are intoxicating.</p>
        <p>Sign up for updates and all things natural.</p>
        <form>
          <input type="email" />
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};

export default Home;
