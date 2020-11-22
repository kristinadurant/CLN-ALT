import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { set } from 'mongoose';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [popSignUp, setPopSignUp] = useState(false);
  const [cat, setCat] = useState({});

  // useEffect(() => {
  //   if (user && !currentUser) {
  //     axios
  //       .get(`/api/users/me`, {
  //         withCredentials: true
  //       })
  //       .then(({ data }) => {
  //         setCurrentUser(data);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [currentUser, user]);
  console.log(currentUser);
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
