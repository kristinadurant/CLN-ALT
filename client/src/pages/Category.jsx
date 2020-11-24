import React, { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import ProductImage from '../components/ProductImage';
import BookmarkButton from '../components/BookmarkButton';
import SubCategories from '../components/SubCategories';

const Category = () => {
  const { search, products, setProducts, currentUser } = useContext(AppContext);
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
    <div id="productsList" className="inner">
      <h2>{id}</h2>
      <SubCategories category={id} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
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
                <BookmarkButton user={currentUser?._id} product={product._id} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
