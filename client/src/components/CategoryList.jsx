import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const CategoryList = () => {
  let { id } = useParams();
  const { categories } = useContext(AppContext);

  return (
    <ul className="categoryList">
      {categories.map((category) => (
        <li
          key={category._id}
          className={category._id === id ? 'active imageBox' : 'imageBox'}
        >
          <Link to={`/categories/${category._id}`}>
            <img src={category.image} alt={category.title} />
            <p>{category.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
