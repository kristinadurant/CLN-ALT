import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const user = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popSignUp, setPopSignUp] = useState(false);
  const [cat, setCat] = useState({});

  useEffect(() => {
    if (user && !currentUser) {
      axios
        .get(`/api/users/me`, {
          withCredentials: true
        })
        .then((response) => {
          setCurrentUser(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [currentUser, user]);

  useEffect(() => {
    axios
      .get('/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        search,
        setSearch,
        products,
        setProducts,
        categories,
        setCategories,
        popSignUp,
        setPopSignUp
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
