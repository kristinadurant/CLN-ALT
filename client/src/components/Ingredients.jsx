import React, { useState } from 'react';

const Ingredients = ({ ingredient }) => {
  const [closed, setClosed] = useState(false);

  return (
    <li className={closed ? 'ingredient list' : 'ingredient list closed'}>
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

export default Ingredients;
