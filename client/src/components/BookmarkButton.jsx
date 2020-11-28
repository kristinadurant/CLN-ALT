import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const BookmarkButton = ({ product }) => {
  const { setLoading, currentUser, setPopSignUp } = useContext(AppContext);
  const [bookmarked, setBookmarked] = useState('bookmark');

  const addBoorkmark = async () => {
    if (!currentUser && setPopSignUp('login')) {
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        '/api/favorites',
        { user: currentUser?._id, product },
        { withCredentials: true }
      );
      setLoading(false);
      setBookmarked('bookmarked');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className={bookmarked} onClick={addBoorkmark}>
      <img src={require(`../images/${bookmarked}.svg`)} alt="bookmark" />
      <span>{bookmarked}</span>
    </button>
  );
};

export default BookmarkButton;
