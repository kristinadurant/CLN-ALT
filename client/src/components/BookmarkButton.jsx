import React, { useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const BookmarkButton = ({ user, product }) => {
  const { setLoading } = useContext(AppContext);

  const addBoorkmark = async () => {
    setLoading(true);
    try {
      await axios.post(
        '/api/favorites',
        { user, product },
        { withCredentials: true }
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="noBorder" onClick={addBoorkmark}>
      <img src={require('../images/bookmark.svg')} alt="bookmark" />
      <span>400</span>
    </button>
  );
};

export default BookmarkButton;
