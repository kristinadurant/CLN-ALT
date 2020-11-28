import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import SearchProducts from '../components/SearchProducts';

const Admin = () => {
  const { setPopSignUp, currentUser } = useContext(AppContext);
  const history = useHistory();
  const [tab2, setTab2] = useState(true);
  const handleRedirect = () => {
    setPopSignUp(false);
    history.push(`/profile/${currentUser._id}`);
  };

  return (
    <div className="topSideBackground noRepeat">
      <div id="admin" className="inner">
        <div className="userContainer">
          <div className="imageContainer">
            <img
              src={
                currentUser?.avatar || require(`../images/placeholderUser.png`)
              }
              alt="profile"
            />
          </div>
          <div>
            <p>Admin</p>
            <p>{currentUser?.name}</p>
            <button className="button" onClick={handleRedirect}>
              VIEW PROFILE
            </button>
          </div>
        </div>
        <div className="tabs">
          <button
            className={tab2 && 'active'}
            onClick={() => {
              setTab2(true);
            }}
          >
            + Add Product
          </button>
          <button
            className={!tab2 && 'active'}
            onClick={() => {
              setTab2(false);
            }}
          >
            Update or Delete Product
          </button>
        </div>
        <div className="addProduct" style={{ display: !tab2 && 'none' }}>
          <AddProduct />
        </div>
        <div className="updateProduct" style={{ display: tab2 && 'none' }}>
          <SearchProducts />
        </div>
      </div>
    </div>
  );
};

export default Admin;
