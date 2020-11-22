import React from 'react';

const ProductImage = ({ image, verified }) => {
  return (
    <div className="productImage">
      <div>
        <img
          className="verified"
          src={require(`../images/${verified ? 'verified.svg' : 'banned.svg'}`)}
        />
        {verified && (
          <div>
            <button className="share">
              Share <img src={require(`../images/share.svg`)} alt="share" />
            </button>
            <button className="bookmark">
              Bookmark{' '}
              <img src={require(`../images/bookmark.svg`)} alt="bookmark" />
            </button>
          </div>
        )}
      </div>
      <img src={image} />
    </div>
  );
};

export default ProductImage;
