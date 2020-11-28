import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import MultiSelectInput from './MultiSelectInput';
import axios from 'axios';

const TAGS = [
  { _id: 'vegan', name: 'Vegan' },
  { _id: 'paraben_free', name: 'Paraben free' },
  { _id: 'cruelty_free', name: 'Cruelty free' },
  { _id: 'sulfate_free', name: 'Sulfate free' },
  { _id: 'gmo_free', name: 'Gmo free' },
  { _id: 'phthalate_free', name: 'Phthalate free' }
];

const AddProduct = ({ product }) => {
  const { categories } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const [verified, setVerified] = useState(false);
  const [cat, setCat] = useState(false);
  const [subCat, setSubCat] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    e.target.name === 'category' && setCat(e.target.value);
  };

  const handleMultiSelectChange = ({ fieldName, selections }) => {
    setFormData({ ...formData, [fieldName]: selections });
  };

  const handleChangeVerified = (e) => {
    setVerified(!verified);
    setFormData({ ...formData, [e.target.name]: verified });
  };

  useEffect(() => {
    axios
      .get(`/api/subCategories/?category=${cat}`)
      .then(({ data }) => {
        setSubCat(data);
      })
      .catch((error) => console.log(error));
  }, [cat, setSubCat]);

  //fetching the ingredients
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
      await axios.post('/api/products/', formData, { withCredentials: true });
      setFormData({});
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios.put(`/api/products/${product._id}`, formData, {
        withCredentials: true
      });
      setFormData({});
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={product ? handleUpdate : handleSubmission}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        placeholder={product?.title}
        onChange={handleChange}
        value={product?.title}
      />
      <label>Description</label>
      <textarea
        name="description"
        placeholder="Product description"
        onChange={handleChange}
        rows="10"
        value={product?.description}
      />
      <label>Category</label>
      <select name="category" onChange={handleChange} value={product?.category}>
        {categories?.map((category) => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>
      <label>Subcategory</label>
      <select
        name="subCategory"
        onChange={handleChange}
        placeholder="Choose a category..."
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
      <button
        type="button"
        name="verified"
        onClick={handleChangeVerified}
        value={product?.verified}
      >
        Verified
      </button>
      <button className="button bgBlack" type="submit">
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;
