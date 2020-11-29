import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import MultiSelectInput from './MultiSelectInput';
import AddProductImage from './AddProductImage';
import axios from 'axios';

const TAGS = [
  { _id: 'vegan', name: 'Vegan' },
  { _id: 'paraben_free', name: 'Paraben free' },
  { _id: 'cruelty_free', name: 'Cruelty free' },
  { _id: 'sulfate_free', name: 'Sulfate free' },
  { _id: 'gmo_free', name: 'Gmo free' },
  { _id: 'phthalate_free', name: 'Phthalate free' }
];

const AddProduct = () => {
  const { categories } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [verified, setVerified] = useState(false);
  const [cat, setCat] = useState(false);
  const [subCat, setSubCat] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [product, setProduct] = useState(null);

  const handleChange = (e) => {
    e.target.name === 'category' && setCat(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelectChange = ({ fieldName, selections }) => {
    setFormData({ ...formData, [fieldName]: selections });
  };

  useEffect(() => {
    axios
      .get(`/api/subCategories/?category=${cat}`)
      .then(({ data }) => {
        setSubCat(data);
      })
      .catch((error) => console.log(error));
  }, [cat, setSubCat]);

  useEffect(() => {
    axios
      .get('/api/ingredients')
      .then(({ data }) => {
        setIngredients(data);
      })
      .catch((error) => console.log(error));
  }, [setIngredients]);

  const handleSubmission = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      const response = await axios.post(
        '/api/products/',
        { ...formData, verified },
        {
          withCredentials: true
        }
      );
      setProduct(response.data);
      setFormData({});
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!product && (
        <form onSubmit={handleSubmission}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder={product?.title}
            onChange={handleChange}
            value={product?.title}
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Product description"
            onChange={handleChange}
            rows="10"
            value={product?.description}
            required
          />
          <label>Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={product?.category}
            required
          >
            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.title}
              </option>
            ))}
          </select>
          <label>Subcategory</label>
          <select
            name="subcategory"
            onChange={handleChange}
            placeholder="Choose a category..."
            required
          >
            {subCat?.map((subCategory) => (
              <option key={subCategory._id} value={subCategory._id}>
                {subCategory.title}
              </option>
            )) || <option>Chose a category</option>}
          </select>
          <label>Tags</label>
          <MultiSelectInput
            fieldName="tags"
            options={TAGS}
            handleChange={handleMultiSelectChange}
          />
          <label>Ingredients</label>
          <MultiSelectInput
            fieldName="ingredients"
            options={ingredients && ingredients}
            handleChange={handleMultiSelectChange}
          />
          <p className="verified">
            <button
              type="button"
              name="verified"
              onClick={(e) => setVerified(!verified)}
              value={product?.verified}
            >
              {verified && (
                <img src={require('../images/checkmark.svg')} alt="checkmark" />
              )}
            </button>
            <span>Verified</span>
          </p>
          <button className="button bgBlack" type="submit">
            Add Product
          </button>
        </form>
      )}
      {product && <AddProductImage product={product} />}
    </>
  );
};

export default AddProduct;
