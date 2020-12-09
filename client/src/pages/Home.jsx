import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import 'react-multi-carousel/lib/styles.css';
import Simple from '../components/Simple';

const Home = () => {
  const { categories } = useContext(AppContext);

  return (
    <div id="homepage">
      <section id="banner">
        <div className="inner">
          <div className="text">
            <h1>Think Clean!</h1>
            <p>
              Search a personal care product and get its ingredients, and let us
              direct you to cleaner alternatives!
            </p>
            <Link to="/products" className="bgBlack button">
              Discover
            </Link>
          </div>
        </div>
      </section>

      <section id="guideSection">
        <div className="inner">
          <h6>
            <span className="cln">CLN</span>
            <span className="alt">+ALT</span>
            &nbsp; User Guide
          </h6>
          <img src={require('../images/verified.svg')} alt="verified" />
          <p>
            Our mission is to inform the way people think about ingredients and
            products they put on their bodies. We want to create a safer, more
            sustainable, more ethical personal care industry.
            <Link to="/userGuide" className="block">
              Read more
            </Link>
          </p>
        </div>
      </section>

      <section id="phones" className="bottomBackground">
        <div className="inner">
          <h6>
            How &nbsp;
            <span className="cln">CLN</span>
            <span className="alt">+ALT</span>
            &nbsp; works
          </h6>
          <div className="phoneColumns">
            <div>
              <img src={require('../images/iphone1.png')} alt="phone-icon" />
              <p>SEARCH</p>
              <p> a product</p>
            </div>
            <div>
              <img src={require('../images/iphone2.png')} alt="phone-icon" />
              <p>LEARN</p>
              <p>about the ingredients</p>
            </div>
            <div>
              <img src={require('../images/iphone3.png')} alt="phone-icon" />
              <p>FIND</p>
              <p>cleaner alternatives</p>
            </div>
          </div>
        </div>
      </section>

      <section id="categorySection" className="topSideBackground">
        <div className="inner">
          <h6>Browse by Category</h6>
          <ul>
            {categories.map((cat) => (
              <li key={cat._id} className="imageBox">
                <Link to={`/products/category/${cat._id}`}>
                  <img src={cat.image} alt={cat.title} />
                  <p>{cat.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="justVerified">
        <div className="inner">
          <h6>Just Verified</h6>
          <Simple />
        </div>
      </section>

      <section id="doctors">
        <div className="inner">
          <h6>Wellness Review Board</h6>
          <p>
            CLN+ALT’s Wellness Board is a team of renowned experts—like
            dermatologists, nutritionists, gynecologists and psychologists—who
            ensure our content is accurate, comprehensive, true and reflective
            of the latest industry research. We strive to be the most trusted
            source in your wellness journey and our Board serves an important
            purpose along the way.
          </p>

          <div className="container">
            <div>
              <img src={require('../images/doctortanner.svg')} alt="doctor" />
              <p>Dr. Mia Chenna</p>
              <p>Dermatologist</p>
            </div>
            <div>
              <img src={require('../images/doctorlee.svg')} alt="doctor" />
              <p>Dr. Wendy Lee</p>
              <p>Doctor</p>
            </div>
            <div>
              <img src={require('../images/doctorchenna.svg')} alt="doctor" />
              <p>Dr. Dara Chenna</p>
              <p>Cosmetologist</p>
            </div>
          </div>
        </div>
      </section>

      <section id="social" className="bottomBackground">
        <div className="inner">
          <h6>
            FOLLOW <span>@CLNALT</span> ON IG
          </h6>
          <div className="instagram">
            <div>
              <img src={require('../images/instaone.jpg')} />
              <a href="https://www.instagram.com/" target="_blank">
                <img src={require('../images/instagram.svg')} alt="instagram" />
              </a>
            </div>
            <div>
              <img src={require('../images/instatwo.jpg')} />
              <a href="https://www.instagram.com/" target="_blank">
                <img src={require('../images/instagram.svg')} alt="instagram" />
              </a>
            </div>
            <div>
              <img src={require('../images/insta-three.jpg')} />
              <a href="https://www.instagram.com/" target="_blank">
                <img src={require('../images/instagram.svg')} alt="instagram" />
              </a>
            </div>
          </div>
          <p>We're toxic-free but our emails are intoxicating.</p>
          <p>Sign up for updates and all things natural.</p>
          <form className="email-subscription">
            <input type="email" className="email-subscription" />
            <button type="submit" className="emailbutton-subscription">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
