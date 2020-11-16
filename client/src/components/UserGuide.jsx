import React from 'react';
import Meter from './Meter';

const UserGuide = () => {
  return (
    <div>
      <section>
        <h6>User's Guide</h6>
        ##########LOGO########## ##########LOGO##########
        ##########LOGO##########
        <p>What does the CLN+ALT&#8482; mark mean?</p>
        <p>
          When you see the CLN+ALT&#8482; mark on personal care products, you
          will know that the product meets CLN+ALT's strictest criteria for
          transparency and health. When you see the mark, you can be confident
          that the product:
        </p>
        <ul>
          <li>Avoids CLN+ALT's ingredients of concern</li>
          <li>Full transparency</li>
          <li>Good manufacturing practices</li>
        </ul>
      </section>
      <section>
        <h6>CLN+ALT's Rating Score</h6>
        <Meter />
        <p>
          The ingredient hazard score, from 1-10, reflects known and suspected
          hazards linked to the ingredients.
        </p>
      </section>
    </div>
  );
};

export default UserGuide;
