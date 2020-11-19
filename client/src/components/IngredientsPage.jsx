import React from 'react';
import Ingredients from './Ingredients';

const IngredientsPage = () => {
  // fetch all bad ingredients instead of defining array ingredients
  let ingredients = [
    {
      name: 'ing1',
      source: 'func',
      concern: ['alergy', 'cancer']
    },
    {
      name: 'ing1',
      source: 'func',
      concern: ['alergy']
    },
    {
      name: 'ing1',
      source: 'func',
      note: "Doctor's note"
    }
  ];

  return (
    <div>
      <h6>List of Banned Ingredients</h6>
      {ingredients.map((ingredient) => (
        <Ingredients key={ingredient._id} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default IngredientsPage;
