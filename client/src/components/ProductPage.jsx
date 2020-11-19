import React from 'react';
import ProductImage from './ProductImage';
import Meter from './Meter';
import Ingredients from './Ingredients';
import Reviews from './Reviews';
import Ingredient from './Ingredients';

let product = {
  id: '572y4hgqafj',
  title: 'W3LL PEOPLE Bio Correct Multi-Action Cream',
  verified: true,
  ingredients: [
    {
      name: 'CHAMOMILLA RECUTITA (MATRICARIA) FLOWER EXTRACT',
      source: 'Chamomile flower',
      note: 'calming',
      rate: 3
    },
    {
      name: 'ISONONYL ISONONANOATE',
      source: 'chemical',
      note: 'toxic',
      rate: 2
    },
    {
      name: 'GLYCERYL BEHENATE',
      source: 'chemical',
      note: 'toxic',
      rate: 9
    },
    {
      name: 'CI 77499',
      source: 'chemical',
      note: 'toxic',
      rate: 5
    },
    {
      name: 'COCO-CAPRYLATE/ CAPRATE',
      source: 'chemical',
      note: 'toxic',
      rate: 7
    },
    {
      name: 'ALGAE EXTRACT',
      source: 'chemical',
      note: 'toxic',
      rate: 6
    }
  ],
  tags: ['vegan', 'cruelty_free', 'paraben_free', 'sustainable', 'non_gmo'],
  description:
    'Floral with bold notes of lavender and subtle accents of rose and geranium.',
  image:
    'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  buyingSuggestion: '65$ at SEPHORA',
  category: 'Skincare',
  subcategory: 'Moisturizers'
};

const ProductPage = () => {
  return (
    <div id="product">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <ProductImage image={product.image} verified={product.verified} />
      <div className="tags">
        {product.tags.map((tag, index) => {
          return <img key={index} src={require(`../images/verified.png`)} />;
        })}
      </div>
      <Meter ingredients={product.ingredients} />
      <div className="tabs">
        <button className="active">Ingredients</button>
        <button>Reviews</button>
      </div>
      <div>
        {product.ingredients.map((ingredient) => (
          <Ingredients key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
      <Reviews />
    </div>
  );
};

export default ProductPage;
