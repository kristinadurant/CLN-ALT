import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h6>Blog</h6>
      {posts.map((post) => (
        <li key={post._id}>
          <h2>{post.title}</h2>
          <img url={post.image} alt={post.title} />
          {post.text}
        </li>
      ))}
    </div>
  );
};

export default Blog;
