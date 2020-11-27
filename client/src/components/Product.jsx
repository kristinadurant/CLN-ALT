import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../components/ProductImage';
import BookmarkButton from '../components/BookmarkButton';

const Product = ({ product, user }) => {
  return (
    <>
      <Link to={`/products/${product._id}`}>
        <ProductImage
          id={product._id}
          verified={product.verified}
          image={product.image}
          title={product._title}
        />
      </Link>
      <div className="productInfo">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <div>
          <Link to={`/products/${product._id}`}>
            <img src={require(`../images/star.svg`)} alt="star" />
            <span>4.5</span>
          </Link>
          <BookmarkButton user={user?._id} product={product._id} />
        </div>
      </div>
    </>
  );
};

export default Product;
