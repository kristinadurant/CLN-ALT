import React, { useState, useEffect } from 'react';

const Meter = ({ ingredients, verified }) => {
  const [meterNumber, setMeterNumber] = useState(0);

  function meter(ingredients) {
    let meter = 0;
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].score) {
        meter += ingredients[i].score;
      }
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
  useEffect(() => {
    if (ingredients) setMeterNumber(meter(ingredients));
  }, [ingredients]);
  console.log(meterNumber);
  return (
    <>
      {meterNumber > 0 && (
        <div className={'meter'}>
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
      )}
    </>
  );
};

export default Meter;
