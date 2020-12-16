import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { setPopSignUp, currentUser } = useContext(AppContext);

  return (
    <header>
      <div className="inner">
        <button
          className="burger noBorder"
          onClick={(e) => setPopSignUp('mobileNav')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">
                <img src={require('../images/Logo.svg')} className="logo" />
              </Link>
            </li>
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
        </nav>
        <div className="right-nav">
          <SearchBar />
          <button
            className="noBorder profile"
            onClick={(e) => setPopSignUp(currentUser ? 'logOut' : 'popOptions')}
          >
            <img src={require('../images/profile.svg')} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
