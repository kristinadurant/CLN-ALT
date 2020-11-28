import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { setSearch, setPopSignUp, currentUser } = useContext(AppContext);
  const [navactive, setNavactive] = useState('false');
  //User clicks burger change className of nav-links to active
  //On nav-links make ternary instead of passing className, pass it a conditional statement
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (e) => {
    if (location.pathname !== '/categories') {
      history.push('/categories');
    }
    setSearch(e.target.value);
  };
  const handleToggle = () => {
    setNavactive(!navactive);
  };

  return (
    <header>
      <nav className="navbar">
        <button className="hamburgerexit exit">&#10005;</button>
        <div className="burger" onClick={handleToggle}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <Link to="/">
          <img src={require('../images/Logo.svg')} />
        </Link>
        <ul className={navactive ? 'nav-active' : 'nav-links'}>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/userGuide">User Guide</Link>
          </li>
          <li>
            <Link to="/bannedIngredients">Banned Ingredients</Link>
          </li>
          <li>
            <Link to="/ourStory">Our Story</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <div className="right-nav">
          <form action="action_page.php">
            <input
              className="searchbar"
              onChange={handleSearch}
              type="text"
              placeholder="Search personal care products..."
            />
            <button type="button" className="searchnav-button">
              Search
            </button>
          </form>

          <img
            src={require('../images/profile.svg')}
            onClick={(e) => setPopSignUp(currentUser ? 'logOut' : 'popOptions')}
            className="profileimage"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
