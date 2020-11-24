import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import ProductImage from './ProductImage';

const Category = () => {
  const { search, products, setProducts } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/products?category=${id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts, id]);

  const filteredProducts = products?.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <h2>{}</h2>
      {filteredProducts.map((product) => (
        <li>
          <Link to={`/products/${product._id}`}>
            <ProductImage image={product.image} verified={product.verified} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Category;
