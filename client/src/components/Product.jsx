import React from 'react';

let product = {
  id: '572y4hgqafj',
  title: 'W3LL PEOPLE Bio Correct Multi-Action Cream',
  verified: true,
  ingredients: [
    {
      name: 'CHAMOMILLA RECUTITA (MATRICARIA) FLOWER EXTRACT',
      source: 'Chamomile flower',
      function: 'calming',
      rate: 3
    },
    {
      name: 'ISONONYL ISONONANOATE',
      source: 'chemical',
      function: 'toxic',
      rate: 2
    },
    {
      name: 'GLYCERYL BEHENATE',
      source: 'chemical',
      function: 'toxic',
      rate: 9
    },
    {
      name: 'CI 77499',
      source: 'chemical',
      function: 'toxic',
      rate: 5
    },
    {
      name: 'COCO-CAPRYLATE/ CAPRATE',
      source: 'chemical',
      function: 'toxic',
      rate: 7
    },
    {
      name: 'ALGAE EXTRACT',
      source: 'chemical',
      function: 'toxic',
      rate: 6
    }
  ],
  tags: ['vegan', 'cruelty free', 'paraben free', 'sustainable', 'non-gmo'],
  description:
    'Floral with bold notes of lavender and subtle accents of rose and geranium.',
  image:
    'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  buyingSuggestion: '65$ at SEPHORA',
  category: 'Skincare',
  subcategory: 'Moisturizers'
};

const Product = () => {
  return (
    <div id="product">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <div className="productImage">
        <img src={product.image} width={'300px'} />
        <img
          className="verified"
          src={require(`../images/${
            product.verified ? 'verified.png' : 'not_verified.png'
          }`)}
        />
      </div>
    </div>
  );
};

export default Product;
