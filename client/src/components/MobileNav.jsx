import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const MobileNav = () => {
  return (
    <div className="mobileNav inner">
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/userGuide">User Guide</Link>
        </li>
        <li>
          <Link to="/bannedIngredients">Banned Ingredients</Link>
        </li>
      </ul>
      <SearchBar />
    </div>
  );
};

export default MobileNav;
