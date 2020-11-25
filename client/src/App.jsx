import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/AppContext';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import Navbar from './components/Navbar';
import PopUp from './components/PopUp';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserGuide from './pages/UserGuide';
import Blog from './pages/Blog';
import OurStory from './pages/OurStory';
import Categories from './pages/Categories';
import Category from './pages/Category';
import ProductPage from './pages/ProductPage';
import IngredientsPage from './pages/IngredientsPage';
import TermsAndConditions from './pages/TermsAndConditions';
import Profile from './pages/Profile';
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
          <PrivateRoute exact path="/categories/:id" component={Category} />
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
          <PrivateRoute exact path="/profile/:id" component={Profile} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
