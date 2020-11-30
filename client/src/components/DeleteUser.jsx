import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const DeleteUser = () => {
  const { setPopSignUp, setCurrentUser, currentUser } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setFormData({ password: event.target.value });
  };
  console.log(formData);
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios.delete(
        '/api/users/me',
        { data: { ...formData, ...currentUser } },
        { withCredentials: true }
      );
      sessionStorage.removeItem('user');
      setCurrentUser(null);
      setPopSignUp(false);
      history.push('/');
    } catch (error) {
      console.log('Delete User: ' + error);
    }
  };

  return (
    <div>
      <form className="container" onSubmit={handleDelete}>
        <h6>Sorry to see you leave!</h6>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button className="button bgBlack" type="submit">
          Delete Account
        </button>
      </form>
      <a onClick={(e) => setPopSignUp(false)}>Back</a>
    </div>
  );
};

export default DeleteUser;
