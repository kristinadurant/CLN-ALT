import React from 'react';
import { HashLink } from 'react-router-hash-link';

const ToTheTop = () => {
  return (
    <HashLink smooth to={`#root`} id="toTheTop">
      <i className="fas fa-angle-up"></i>
    </HashLink>
  );
};

export default ToTheTop;
