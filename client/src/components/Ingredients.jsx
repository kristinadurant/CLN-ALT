import React, { useState } from 'react';

const Ingredient = ({ ingredient }) => {
  const [closed, setClosed] = useState(false);

  return (
    <li className={closed ? 'ingredient' : 'ingredient closed'}>
      <button onClick={() => setClosed(!closed)}>{closed ? '-' : '+'}</button>
      <div>
        <p>{ingredient.name}</p>
        <p>
          <strong>
            {ingredient.verified
              ? 'What does it do?'
              : 'Why is it bad for you?'}
          </strong>
          {ingredient.description}
        </p>
      </div>
    </li>
  );
};

export default Ingredient;
