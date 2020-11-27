import React from 'react';
import BookmarkButton from './BookmarkButton';
const ProductImage = ({ image, verified, title, id }) => {
  return (
    <div className="productImage imageBox">
      <div>
        <img
          className="verified"
          src={require(`../images/${verified ? 'verified.svg' : 'banned.svg'}`)}
          alt={verified ? 'verified' : 'banned'}
        />
        <div>
          <button className="share">
            Share <img src={require(`../images/share.svg`)} alt="share" />
          </button>
          <BookmarkButton product={id} />
        </div>
      </div>
      {image && <img src={image} alt={title} />}
      {!image && <span>Coming soon</span>}
    </div>
  );
};

export default ProductImage;
