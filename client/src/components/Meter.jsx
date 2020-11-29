import React from 'react';

const Meter = ({ ingredients, verified }) => {
  function meter(ingredients) {
    let meter = 0;
    for (let i = 0; i < ingredients.length; i++) {
      meter += ingredients[i].score;
    }
    return meter;
  }
  function lines(number) {
    let html = [];
    for (let i = 1; i < 10; i++) {
      html.push(<span></span>);
    }
    return html;
  }

  let meterNumber = ingredients ? meter(ingredients) : '70';

  return (
    <div className={verified ? 'meterNoDisplay' : 'meter'}>
      <div className="meterBar">
        <div style={{ width: `${meterNumber}%` }}>
          <p>{meterNumber}</p>
        </div>
        {lines(10)}
      </div>
      <p>
        <h2>Clean</h2> <h2>Dirty</h2>
      </p>
    </div>
  );
};

export default Meter;
