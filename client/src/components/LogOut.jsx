import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const LogOut = () => {
  const { setPopSignUp, currentUser, setCurrentUser } = useContext(AppContext);
  const history = useHistory();

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/logout', {
        withCredentials: true
      });
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      setPopSignUp(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRedirect = () => {
    setPopSignUp(false);
    history.push(`/profile/${currentUser._id}`);
  };
  const handleRedirectAdmin = () => {
    setPopSignUp(false);
    history.push(`/admin/${currentUser._id}`);
  };

  return (
    <div className="logout container">
      <h6>{currentUser?.name}</h6>
      <button onClick={handleRedirect}>GO TO PROFILE</button>
      {currentUser.admin && (
        <button onClick={handleRedirectAdmin}>MANAGE PRODUCTS</button>
      )}
      <button onClick={handleLogOut}>LOGOUT</button>
    </div>
  );
};

export default LogOut;
