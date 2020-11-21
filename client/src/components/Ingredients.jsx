import React, { useState } from 'react';

const Ingredient = ({ ingredient }) => {
  const [closed, setClosed] = useState(false);

  return (
    <li className={closed ? 'ingredient' : 'ingredient closed'}>
      <div>
        <p>{ingredient.name}</p>
        <p>
          <span>
            {ingredient.verified
              ? 'What does it do?'
              : 'Why is it bad for you?'}
          </span>
          {ingredient.description}
        </p>
      </div>
      <button onClick={() => setClosed(!closed)}>{closed ? '-' : '+'}</button>
    </li>
  );
};

export default Ingredient;
