import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImage from './ProductImage';
import Meter from './Meter';
import Ingredients from './Ingredients';
import Reviews from './Reviews';

const ProductPage = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="product">
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <ProductImage image={product.image} verified={product.verified} />
      <div className="tags">
        {console.log(product)}
        {product.tags?.map((tag, index) => {
          return <img key={index} src={require(`../images/${tag}.svg`)} />;
        })}
      </div>
      <Meter ingredients={product.ingredients} />
      <div className="tabs">
        <button className="active">Ingredients</button>
        <button>Reviews</button>
      </div>
      <div>
        {product.ingredients?.map((ingredient) => (
          <Ingredients key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
      <Reviews />
    </div>
  );
};

export default ProductPage;
