import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { setSubstitutionWrappers } from '@sendgrid/mail';

const SubCategories = ({ category }) => {
  const { categories } = useContext(AppContext);
  const [subCat, setSubCat] = useState([]);
  const [currentSubCat, setCurrentSubCat] = useState('');

  useEffect(() => {
    axios
      .get(`/api/subCategories?category=${category}`)
      .then((response) => {
        setSubCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setSubCat, category]);

  return (
    <div id="subCategories">
      {subCat?.map((sub) => (
        <button
          className={currentSubCat === sub.title ? 'active button' : 'button'}
          onClick={() => setCurrentSubCat(sub.title)}
          key={sub._id}
        >
          {sub.title}
        </button>
      ))}
    </div>
  );
};

export default SubCategories;
