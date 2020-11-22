import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Profile = () => {
  const { currentUser } = useContext(AppContext);
  console.log(currentUser);
  return <div>{currentUser?.name}</div>;
};

export default Profile;
