import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductImage from '../components/ProductImage';
import Meter from '../components/Meter';
import Ingredients from '../components/Ingredients';
import Reviews from '../components/Reviews';
import { AppContext } from '../context/AppContext';

const ProductPage = () => {
  const { setLoading, loading } = useContext(AppContext);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [tab1, setTab1] = useState(true);
  const [hideMeter, setHideMeter] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setHideMeter(response.data.verified);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, setProduct]);

  return (
    <div>
      {!loading && (
        <div id="product" className="inner">
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <div className="productContainer">
            <ProductImage
              id={product._id}
              image={product.image}
              verified={product.verified}
              title={product.title}
            />
            <div className="tags">
              {product.tags?.map((tag, index) => {
                return (
                  <img
                    key={index}
                    src={require(`../images/${tag}.svg`)}
                    alt={tag}
                  />
                );
              })}
            </div>
          </div>
          {hideMeter && (
            <Meter
              ingredients={product.ingredients}
              verified={product.verified}
            />
          )}
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
              id="reviews"
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
            {product?.reviews && (
              <Reviews reviews={product.reviews} productId={id} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
