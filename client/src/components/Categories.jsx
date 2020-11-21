import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Categories = () => {
  const { categories } = useContext(AppContext);

  return (
    <div>
      <h6>What are you looking for?</h6>
      <p>
        With thousands of consumer products on the market, it can be
        overwhelming to know which ones are safer for you. Let us help you.
      </p>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            <Link to={`/categories/${category._id}`}>
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
