import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProductImage = ({ product }) => {
  const history = useHistory();
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [productData, setProductData] = useState(product);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image?.name);
    try {
      const updatedProduct = await axios({
        method: 'POST',
        url: `/api/products/${product?._id}`,
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setProductData({ ...productData, image: updatedProduct.data.secure_url })
      history.push(`/products/${product._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="imageContainer">
        <img
          src={
            preview ||
            product?.image ||
            require(`../images/placeholderUser.png`)
          }
          alt="profile-picture"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageSelect} />
        <button className="button bgBlack" type="submit">
          Save Image
        </button>
      </form>
    </div>
  );
};

export default AddProductImage;
