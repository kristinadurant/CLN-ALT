import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        search,
        setSearch,
        products,
        setProducts
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
