import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import OurStory from './components/OurStory';
import Categories from './components/Categories';
import Product from './components/Product';

const App = () => {
  return (
    // <AppContextProvider>

    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/ourStory" component={OurStory} />
        <Route exact path="/product" component={Product} />
      </Switch>
      <Footer />
    </BrowserRouter>

    // </AppContextProvider>
  );
};

export default App;
