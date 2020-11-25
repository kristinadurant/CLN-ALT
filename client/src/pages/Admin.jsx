import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Admin = () => {
  const { setPopSignUp, currentUser, categories } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const [verified, setVerified] = useState(false);
  const [cat, setCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeVerified = (e) => {
    setVerified(!verified);
    setFormData({ ...formData, [e.target.name]: verified });
  };
  const hangleChangeCategory = (e) => {
    setCat(e.target.value);
    setFormData({ ...formData, category: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`/api/subCategories/?category=${cat}`)
      .then(({ data }) => {
        setSubCat(data);
      })
      .catch((error) => console.log(error));
  }, [cat, setSubCat]);
  const handleSubmission = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios.post('/api/products/', formData, { withCredentials: true });
      //   swal('New Task!', 'You task has been added!', 'success');
      setFormData(null);
      form.reset();
    } catch (error) {
      console.log(error);
      //   swal('Oops!', 'Something went wrong');
    }
  };

  return (
    <div id="profile" className="inner">
      <div className="userContainer columns2">
        <img
          src={currentUser?.avatar || require(`../images/placeholderUser.png`)}
          alt="profile"
        />
        <div>
          <p>{currentUser?.name}</p>
          <p>{currentUser?.email}</p>
          <a className="block" onClick={(e) => setPopSignUp('resetPassword')}>
            Change Password
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmission}>
        <p>Add a product</p>
        <input
          type="text"
          name="title"
          placeholder="Product title"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Product description"
          onChange={handleChange}
          rows="10"
        />
        <select name="category" onChange={hangleChangeCategory}>
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
        <select name="subCategory" onChange={handleChange}>
          {subCat?.map((subCategory) => (
            <option key={subCategory._id} value={subCategory._id}>
              {subCategory.title}
            </option>
          ))}
        </select>
        <select name="tags" onChange={handleChange} multiple>
          <option value="vegan">Vegan</option>
          <option value="paraben_free">Paraben free</option>
          <option value="cruelty_free">Cruelty free</option>
          <option value="sulfate_free">Sulfate free</option>
          <option value="gmo_free">Gmo free</option>
          <option value="phthalate_free">Phthalate free</option>
        </select>
        <button type="button" name="verified" onClick={handleChangeVerified}>
          Verified
        </button>
        <button className="button" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Admin;
