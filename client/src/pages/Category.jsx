import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import Product from '../components/Product';

const Category = () => {
  const { search, products, setProducts, currentUser, categories } = useContext(
    AppContext
  );
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [subCat, setSubCat] = useState(null);
  const [subcategories, setSubcategories] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    cat && setFilter(`/?category=${cat}`);
    subCat && setFilter(`/?subcategory=${subCat}`);
  }, [cat, subCat]);

  useEffect(() => {
    axios
      .get(`/api/products${filter}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts, filter]);

  useEffect(() => {
    axios
      .get(`/api/subCategories?category=${cat}`)
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setSubcategories, cat]);

  const filteredProducts = products?.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div id="productsList" className="inner">
      <h6>What are you looking for?</h6>
      <p>
        With thousands of consumer products on the market, it can be
        overwhelming to know which ones are safer for you. Let us help you.
      </p>
      <ul className="categoryList">
        {categories.map((category) => (
          <li
            key={category._id}
            className={category._id === cat ? 'active imageBox' : 'imageBox'}
          >
            <Link
              to={`/products/category/${category._id}`}
              onClick={() => {
                setCat(category._id);
                setSubCat(null);
              }}
            >
              <div>
                <img src={category.image} alt={category.title} />
              </div>
              <p>{category.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div id="subCategories">
        {cat &&
          subcategories?.map((sub) => (
            <Link
              to={`/products/category/${cat}/subcategory/${sub._id}`}
              className={subCat === sub._id ? 'active button' : 'button'}
              onClick={() => setSubCat(sub._id)}
              key={sub._id}
            >
              {sub.title}
            </Link>
          ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product._id}>
            <Product product={product} user={currentUser} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
