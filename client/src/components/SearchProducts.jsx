import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import UpdateProduct from './UpdateProduct';

const SearchProducts = () => {
  const { setLoading, loading } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    axios
      .get('/api/products')
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, [setProducts, loading]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredProducts = products?.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredProducts);

  const handleDelete = async (e) => {
    setLoading(true);
    try {
      await axios.delete(`/api/products/${e.target.value}`, {
        withCredentials: true
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!update && (
        <input
          type="text"
          className="search"
          placeholder="Search..."
          onChange={handleSearch}
        />
      )}
      {search && !update && (
        <div>
          {filteredProducts?.map((product) => (
            <li className="list productsList" key={product._id}>
              <Link to={`/products/${product._id}`}>{product.title}</Link>
              <div>
                <button className="button" onClick={(e) => setUpdate(product)}>
                  Update
                </button>
                <button
                  className="button"
                  value={product._id}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </div>
      )}
      {update && <UpdateProduct currentProduct={update} />}
    </div>
  );
};

export default SearchProducts;
