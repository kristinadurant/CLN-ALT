import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Navbar from './components/Navbar';
import PopUp from './components/PopUp';
import Footer from './components/Footer';
import Home from './components/Home';
import UserGuide from './components/UserGuide';
import Blog from './components/Blog';
import OurStory from './components/OurStory';
import Categories from './components/Categories';
import Category from './components/Category';
import ProductPage from './components/ProductPage';
import IngredientsPage from './components/IngredientsPage';
import TermsAndConditions from './components/TermsAndConditions';
import Profile from './components/Profile';
import UpdatePasswordContainer from './components/UpdatePasswordContainer';

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <PopUp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/categories/:id" component={Category} />
          <Route exact path="/userGuide" component={UserGuide} />
          <Route exact path="/bannedIngredients" component={IngredientsPage} />
          <Route exact path="/ourStory" component={OurStory} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route
            exact
            path="/updatePasswordContainer"
            component={UpdatePasswordContainer}
          />
          <Route
            exact
            path="/termsAndConditions"
            component={TermsAndConditions}
          />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
