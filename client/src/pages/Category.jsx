import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import ProductImage from '../components/ProductImage';
import BookmarkButton from '../components/BookmarkButton';

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
  console.log(filter);
  console.log(products);
  return (
    <div id="productsList" className="inner">
      <h2>{id}</h2>
      <ul className="categoryList">
        {categories.map((category) => (
          <li
            key={category._id}
            className={category._id === cat ? 'active imageBox' : 'imageBox'}
          >
            <Link
              to={`/category/${category._id}`}
              onClick={() => setCat(category._id)}
            >
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div id="subCategories">
        {cat &&
          subcategories?.map((sub) => (
            <Link
              to={`/category/${cat}/subcategory/${sub._id}`}
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
