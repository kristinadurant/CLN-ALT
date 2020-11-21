import React from 'react';

const ProductImage = ({ image, verified }) => {
  return (
    <div className="productImage">
      <img
        className="verified"
        src={require(`../images/${verified ? 'verified.svg' : 'banned.svg'}`)}
      />
      <img src={image} />
    </div>
  );
};

export default ProductImage;
