import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../images/facebook.svg')} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../images/instagram.svg')} alt="instagram" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require('../images/twitter.svg')} alt="twitter" />
          </a>
        </div>
        <ul>
          <li>
            <Link to="/ourStory">ABOUT US</Link>
          </li>
          <li>
            <Link to="#">CONTACT</Link>
          </li>
          <li>
            <Link to="#">PRIVACY LOGIN</Link>
          </li>
          <li>
            <Link to="#">TERMS OF USE</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
