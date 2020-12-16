import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const SearchBar = () => {
  const { setSearch } = useContext(AppContext);
  const history = useHistory();
  const location = useLocation();

  const handleSearch = (e) => {
    if (location.pathname !== '/products') {
      history.push('/products');
    }
    setSearch(e.target.value);
  };

  return (
    <form action="action_page.php" className="search">
      <input
        className="searchbar"
        onChange={handleSearch}
        type="text"
        placeholder="Search personal care products..."
      />
      <button className="bgBlack noBorder">SEARCH</button>
    </form>
  );
};

export default SearchBar;
