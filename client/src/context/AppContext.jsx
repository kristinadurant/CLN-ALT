import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  return (
    <AppContext.Provider
      value={{
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
