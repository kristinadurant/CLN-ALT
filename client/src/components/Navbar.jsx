import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">logo</Link>
        <ul>
          <li>
            <Link to="#">Categories</Link>
          </li>
          <li>
            <Link to="#">User Guide</Link>
          </li>
          <li>
            <Link to="#">Banned Ingredients</Link>
          </li>
          <li>
            <Link to="/ourStory">Our Story</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <input type="search" />
      <a href="#">login</a>
    </header>
  );
};

export default Navbar;
