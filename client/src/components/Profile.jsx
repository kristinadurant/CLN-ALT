import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  return <div>{currentUser}</div>;
};

export default Profile;
