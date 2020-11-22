import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { setSearch, setPopSignUp } = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const handleSearch = (e) => {
    // if (location.pathname !== '/categories') {
    //   console.log('i was run');
    //   history.push('/categories');
    // }
    setSearch(e.target.value);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/">logo</Link>
        <ul>
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
      </nav>
      <form class="example" action="action_page.php">
        <input
          className="searchbar"
          onChange={handleSearch}
          type="text"
          placeholder="Search personal care products..."
        />
        <button type="button">Search</button>
      </form>
      <button onClick={(e) => setPopSignUp('popOptions')}>login</button>
    </header>
  );
};

export default Navbar;
