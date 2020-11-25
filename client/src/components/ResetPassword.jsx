import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const ResetPassword = () => {
  const { setPopSignUp } = useContext(AppContext);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      await axios.get(`/api/password?email=${email}`);
      form.reset();
      setPopSignUp('updatePassword');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h6>Reset your Password.</h6>
      <input
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        type="email"
        placeholder="Email Address"
        autoComplete="off"
      />
      <button className="button bgBlack" type="submit">
        Reset Password
      </button>
      <a onClick={(e) => setPopSignUp('logIn')}>Back</a>
    </form>
  );
};

export default ResetPassword;
