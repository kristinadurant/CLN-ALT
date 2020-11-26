import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import AddProduct from '../components/AddProduct';
import SearchProducts from '../components/SearchProducts';

const Admin = () => {
  const { setPopSignUp, currentUser } = useContext(AppContext);
  const [tab2, setTab2] = useState(true);

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
  );
};

export default Admin;
