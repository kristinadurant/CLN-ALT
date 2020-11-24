import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const UpdatePasswordContainer = () => {
  const { setPopSignUp } = useContext(AppContext);

  useEffect(() => {
    setPopSignUp('updatePassword');
  }, [setPopSignUp]);

  return <div>reset</div>;
};

export default UpdatePasswordContainer;
