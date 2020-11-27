import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to={`/products/${id}#reviews`}>
            <span>+</span>
            <span>Review</span>
          </Link>
          <BookmarkButton product={id} />
        </div>
      </div>
      {image && <img src={image} alt={title} />}
      {!image && <span>Coming soon</span>}
    </div>
  );
};

export default ProductImage;
