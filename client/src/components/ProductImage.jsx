import React from 'react';
import { HashLink } from 'react-router-hash-link';
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
        <div className="productButtons">
          <HashLink smooth to={`/products/${id}#reviews`}>
            <span>+</span>
            <span>Review</span>
          </HashLink>
          <BookmarkButton product={id} />
        </div>
      </div>
      {image && <img src={image} alt={title} />}
      {!image && <span>Coming soon</span>}
    </div>
  );
};

export default ProductImage;
