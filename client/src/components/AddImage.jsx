import React, { useState } from 'react';
import axios from 'axios';

const AddImage = ({ profile, setProfile }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image?.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setProfile({ ...profile, avatar: updatedUser.data.secure_url });
    } catch (error) {
      console.log('Error', 'Oops, something went wrong.');
    }
  };

  return (
    <div>
      <div className="imageContainer">
        <img
          src={
            preview ||
            profile?.avatar ||
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

export default AddImage;
