import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
      <ul>
        <li>
          <Link to="/ourStory">OUR STORY</Link>
        </li>
        <li>
          <Link to="#">HELP & FAQ</Link>
        </li>
        <li>
          <Link to="#">LOGIN</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li>
          <Link to="#">CONTACT</Link>
        </li>
        <li>
          <Link to="#">TERMS & CONDITIONS</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
