import React from 'react';

const ProductImage = ({ image, verified }) => {
  return (
    <div className="productImage">
      <img src={image} width={'300px'} />
      <img
        className="verified"
        src={require(`../images/${
          verified ? 'verified.png' : 'not_verified.png'
        }`)}
      />
    </div>
  );
};

export default ProductImage;
