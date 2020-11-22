import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const UpdatePasswordContainer = () => {
  const { setPopSignUp } = useContext(AppContext);

  useEffect(() => {
    setPopSignUp('updatePassword');
  }, []);

  return <div>reset</div>;
};

export default UpdatePasswordContainer;
