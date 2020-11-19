import React, { useState } from 'react';

const Ingredient = ({ ingredient }) => {
  const [closed, setClosed] = useState(false);

  return (
    <li className={closed ? 'ingredient' : 'ingredient closed'}>
      <button onClick={() => setClosed(!closed)}>{closed ? '-' : '+'}</button>
      <div>
        {ingredient.name && <p>{ingredient.name}</p>}
        {ingredient.source && <p>SOURCE: {ingredient.source}</p>}
        {ingredient.concern && <p>CONCERNS: {ingredient.concern.join(', ')}</p>}
        {ingredient.note && <p>NOTE: {ingredient.note}</p>}
      </div>
    </li>
  );
};

export default Ingredient;
