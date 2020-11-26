import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const UpdatePassword = () => {
  const history = useHistory();
  const { setPopSignUp } = useContext(AppContext);
  const [password, setPassword] = useState(null);
  const handleChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      throw Error('Error!');
    }
    await axios.put(
      '/api/users/password',
      { password: password.password },
      { withCredentials: true }
    );
    setPopSignUp('login');
    history.push('/profile');
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h6>Create a New Password.</h6>
      <input
        onChange={handleChange}
        name="password"
        type="password"
        placeholder="New Password"
      />
      <input
        onChange={handleChange}
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button className="button bgBlack" type="submit">
        Update Password
      </button>
      <a onClick={(e) => setPopSignUp('resetPassword')} href="#">
        Didn't get an Email? Try again.
      </a>
    </form>
  );
};

export default UpdatePassword;
