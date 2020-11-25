import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();
  const { setPopSignUp, currentUser, categories } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const [verified, setVerified] = useState(false);
  console.log(categories);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChangeVerified = (e) => {
    setVerified(!verified);
    setFormData({ ...formData, [e.target.name]: verified });
  };

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
  console.log(formData);
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
        />
        <select name="category" onChange={handleChange}>
          <option value="5fb88094bbfee26d6d95d6cf">bodycare</option>
          <option value="5fb880afbbfee26d6d95d6d0">fragrance</option>
          <option value="5fb8811bbbfee26d6d95d6d1">oralcare</option>
          <option value="5fb8814eea4b5e6d83d23f86">babycare</option>
          <option value="5fb88163ea4b5e6d83d23f87">haircare</option>
          <option value="5fb88175ea4b5e6d83d23f88">skincare</option>
        </select>
        <input
          type="text"
          name="subcategory"
          placeholder="Product subcategory"
          onChange={handleChange}
        />
        <select name="tags" onChange={handleChange}>
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

export default Profile;
