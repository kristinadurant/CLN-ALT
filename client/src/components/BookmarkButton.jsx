import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const BookmarkButton = ({ user, product }) => {
  const { setLoading } = useContext(AppContext);
  const [bookmarked, setBookmarked] = useState('bookmark');

  const addBoorkmark = async () => {
    setBookmarked('bookmarked');
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
    <button className={bookmarked} onClick={addBoorkmark}>
      <span>{bookmarked}</span>
      <img src={require(`../images/${bookmarked}.svg`)} alt="bookmark" />
    </button>
  );
};

export default BookmarkButton;
