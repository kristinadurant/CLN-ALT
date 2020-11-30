import React from 'react';
import Meter from '../components/Meter';

const UserGuide = () => {
  return (
    <div className="liquid">
      <div className="inner">
        <h6 className="userguide-title">User's Guide</h6>

        <section>
          <img src={require('../images/verified.svg')} alt="verified" />
          <p className="what-does">
            What does the CLN+ALT&#8482; verfied mark mean?
          </p>
          <p className="userguide-paragraph">
            When you see the CLN+ALT&#8482; mark on personal care products, you
            will know that the product meets CLN+ALT's strictest criteria for
            transparency and health. When you see the mark, you can be confident
            that the product:
          </p>
          <ul className="userguide-paragraph user">
            <li className="userguide-check">
              <img src={require('../images/okcircle.svg')} />
              Avoids CLN+ALT's ingredients of concern
            </li>

            <li className="userguide-check">
              <img src={require('../images/okcircle.svg')} />
              Full transparency
            </li>

            <li className="userguide-check">
              <img src={require('../images/okcircle.svg')} />
              Good manufacturing practices
            </li>
          </ul>
        </section>
        <section>
          <img src={require('../images/banned.svg')} alt="banned" />
          <p className="what-does">
            What does the CLN+ALT&#8482; Banned mark mean?
          </p>
          <p className="userguide-paragraph">
            When you see the CLN+ALT&#8482; banned mark on personal care
            products, you will know that the product does not meet CLN+ALT's
            strictect criteria for transparency and health.
          </p>
        </section>
        <section>
          <Meter length={70} />
          <p className="what-does">CLN+ALT's Rating Score</p>
          <p className="userguide-paragraph">
            The ingredient hazard score, from 1-10, reflects known and suspected
            hazards linked to the ingredients.
          </p>
        </section>

        <div className="userguide-paragraph">
          <p>
            CLN+ALT® is committed to helping consumers{' '}
            <strong>
              identify the potential risks associated with the personal care
              products
            </strong>{' '}
            they use every day. Unlike other ingredient databases, we focus
            exclusively on the chemical content of the products in question. We
            have consciously avoided the widely-used practice of “greenwashing”,
            whereby the environmental or social responsibility of a product’s
            manufacturer is factored into the assessment allowing a product to
            receive an artificially low toxicity rating. We remain an
            independent company with no affiliate to any other third parties. We
            are solely concerned about the possible impact of a given product on
            an individual’s health, and our ratings methodology reflects that
            singular commitment.{' '}
          </p>

          <p>
            <strong>Our ratings</strong> are determined based on publicly
            available data released by non-profit and government agencies in
            North America regarding the health and safety of the individual
            components found in your personal care products.
          </p>
        </div>

        <table class="health">
          <thead>
            <tr>
              <th>
                <strong>Potential Health</strong>
              </th>
              <th>
                <strong>Potential Action of Ingredients </strong>
              </th>
              <th colspan="3">
                <strong>Rating Based on Strength of Evidence</strong>
              </th>
            </tr>
            <tr>
              <th>Impact of Ingredient</th>
              <th>According to Published Evidence</th>
              <th>Moderate</th>
              <th>Strong</th>
              <th>Conclusive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carcinogenicity</td>
              <td>
                <p>Carcinogenicity Tumor promoter</p>
                <p>Documented links to breast cancer</p>
                <p>Known human carcinogen</p>
                <p>Carcinogenic in lab studies</p>
                <p>Carcinogen</p>
              </td>
              <td>
                <span class="rojo">9</span>
              </td>
              <td>
                <span class="rojo">10</span>
              </td>
              <td>
                <span class="rojo">10</span>
              </td>
            </tr>
            <tr>
              <td>Developmental &amp; Reproductive Toxicity</td>
              <td>
                <p>Hormone Disruptor</p>
                <p>Systemic Toxin</p>
                <p>Neurotoxin </p>
                <p>May cause blindness if used </p>
                <p>near the eyes</p>
                <p>May interfere with male </p>
                <p>reproductive health</p>
              </td>
              <td>
                <span class="amarillo">6</span>
              </td>
              <td>
                <span class="amarillo">7</span> - <span class="rojo">8</span>
              </td>
              <td>
                <span class="rojo">9</span>
              </td>
            </tr>
            <tr>
              <td>Allergenicity &amp; Immunotoxicity</td>
              <td>
                <p>Allergen</p>
                <p>Asthma Trigger</p>
                <p>Immunotoxin</p>
              </td>
              <td>
                <span class="amarillo">4</span>
              </td>
              <td>
                <span class="amarillo">5</span> -{' '}
                <span class="amarillo">6</span>
              </td>
              <td>
                <span class="amarillo">7</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserGuide;
