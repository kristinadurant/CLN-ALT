import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImage from '../components/ProductImage';
import Meter from '../components/Meter';
import Ingredients from '../components/Ingredients';
import Reviews from '../components/Reviews';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [tab1, setTab1] = useState(true);
  console.log(product);

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="product" className="inner">
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <div className="productContainer">
        <ProductImage image={product.image} verified={product.verified} />
        <div className="tags">
          {product.tags?.map((tag, index) => {
            return <img key={index} src={require(`../images/${tag}.svg`)} />;
          })}
        </div>
      </div>
      {!product.verified && <Meter ingredients={product.ingredients} />}
      <div className="tabs">
        <button
          className={tab1 && 'active'}
          onClick={(e) => {
            setTab1(true);
          }}
        >
          Ingredients
        </button>
        <button
          className={!tab1 && 'active'}
          onClick={(e) => {
            setTab1(false);
          }}
        >
          Reviews
        </button>
      </div>
      <div className="ingredients" style={{ display: !tab1 && 'none' }}>
        {product.ingredients?.map((ingredient) => (
          <Ingredients key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
      <div className="reviews" style={{ display: tab1 && 'none' }}>
        {product?.reviews && <Reviews reviews={product.reviews} />}
      </div>
    </div>
  );
};

export default ProductPage;
