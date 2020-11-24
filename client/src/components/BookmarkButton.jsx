import React from 'react';

const BookmarkButton = () => {
  return (
    <button className="noBorder">
      <img src={require(`../images/bookmark.svg`)} alt="bookmark" />
      <span>400</span>
    </button>
  );
};

export default BookmarkButton;
