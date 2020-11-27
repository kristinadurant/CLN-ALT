import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const CategoryList = () => {
  let { id } = useParams();
  const { categories } = useContext(AppContext);
  const [cat, setCat] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/products/?category=${cat}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }, [cat]);

  return (
    <ul className="categoryList">
      {categories.map((category) => (
        <li
          key={category._id}
          className={category._id === id ? 'active imageBox' : 'imageBox'}
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
  );
};

export default CategoryList;
