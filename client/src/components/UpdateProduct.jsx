import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = ({ currentProduct }) => {
  const history = useHistory();
  const [formData, setFormData] = useState(currentProduct);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    const form = e.target;
    e.preventDefault();
    try {
      await axios.put(`/api/products/${currentProduct._id}`, formData, {
        withCredentials: true
      });
      setFormData({});
      form.reset();
      history.push(`/products/${currentProduct._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);
  return (
    <>
      <p className="updateHeader">Change Product's title or Description</p>
      <form onSubmit={handleUpdate}>
        <label>Change Title</label>
        <input
          type="text"
          name="title"
          placeholder={formData?.title}
          onChange={handleChange}
        />
        <label>Change Description</label>
        <textarea
          name="description"
          placeholder={formData?.description}
          onChange={handleChange}
          rows="10"
        />
        <button className="button bgBlack" type="submit">
          Update Product
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
