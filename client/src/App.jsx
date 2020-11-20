import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import UserGuide from './components/UserGuide';
import Blog from './components/Blog';
import OurStory from './components/OurStory';
import Categories from './components/Categories';
import ProductPage from './components/ProductPage';
import IngredientsPage from './components/IngredientsPage';
import TermsAndConditions from './components/TermsAndConditions';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/userGuide" component={UserGuide} />
          <Route exact path="/bannedIngredients" component={IngredientsPage} />
          <Route exact path="/ourStory" component={OurStory} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route
            exact
            path="/termsAndConditions"
            component={TermsAndConditions}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
