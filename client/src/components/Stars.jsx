import React from 'react';

const Stars = ({ rate }) => {
  function stars(rate) {
    let html = [];

    for (let i = 1; i <= rate; i++) {
      html.push(<i className="fas fa-star"></i>);
    }
    for (let i = rate; i < 5; i++) {
      html.push(<i className="fas fa-star regular"></i>);
    }
    return html;
  }

  return <span>{stars(rate)}</span>;
};

export default Stars;
