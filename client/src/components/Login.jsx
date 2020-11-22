import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const LogIn = () => {
  const { setCurrentUser, setPopSignUp } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data.user);
      console.log('logged in user');
      console.log(response.data.user);
      sessionStorage.setItem('user', response.data.user);
      setPopSignUp(false);
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };

  return (
    <form className="container" onSubmit={handleLogIn}>
      <h6>Let's log you in.</h6>
      <input
        onChange={handleChange}
        name="email"
        type="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="Password"
      />
      <button className="button bgBlack" type="submit">
        Log In
      </button>
      <a className="block" onClick={(e) => setPopSignUp('resetPassword')}>
        Forgot Password?
      </a>
      <a onClick={(e) => setPopSignUp('popOptions')}>Back</a>
    </form>
  );
};

export default LogIn;
