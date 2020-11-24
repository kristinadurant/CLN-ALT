import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ingredients from '../components/Ingredients';

const IngredientsPage = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get('/api/ingredients/?banned=true')
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="inner">
      <h6>List of Banned Ingredients</h6>
      {ingredients.map((ingredient) => (
        <Ingredients key={ingredient._id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsPage;
