import React, { useContext, useState } from 'react';
import axios from 'axios';

const AddImage = () => {
  const { currentUser, setCurrentUser, setLoading } = useContext(AppContext);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageSelect = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar', image, image.name);
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCurrentUser({ ...currentUser, avatar: updatedUser.data.secure_url });
      console.log('Sweet!', 'Your image has been updated!', 'success');
    } catch (error) {
      console.log('Error', 'Oops, something went wrong.');
    }
  };

  return (
    <div>
      <img
        src={
          preview
            ? preview
            : currentUser?.avatar
            ? currentUser?.avatar
            : 'https://files.willkennedy.dev/wyncode/wyncode.png'
        }
        alt="profile-picture"
      />
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageSelect} />
        <button type="submit">Save Image</button>
      </form>
    </div>
  );
};

export default AddImage;
