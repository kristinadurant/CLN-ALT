import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../components/ProductImage';
import BookmarkButton from '../components/BookmarkButton';

const Product = ({ product, user }) => {
  console.log(product);
  return (
    <>
      <Link to={`/products/${product._id}`}>
        <ProductImage image={product.image} verified={product.verified} />
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
