import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import { Image } from 'semantic-ui-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
// const images = [
//   'https://files.willkennedy.dev/cln_alt/charisse-kenion-BgbOGZRmeXs-unsplash.jpg',
//   'https://files.willkennedy.dev/cln_alt/sincerely-media-GteR27txmaM-unsplash.jpg',
//   'https://files.willkennedy.dev/cln_alt/toa-heftiba-TQMRdv6dFrg-unsplash.jpg'
//   'https://files.willkennedy.dev/cln_alt/jess-harper-sunday-4zhaPicBe0c-unsplash.jpg',
//   'https://files.willkennedy.dev/cln_alt/lina-verovaya-hdvqsYqvdqI-unsplash.jpg',
//   'https://files.willkennedy.dev/cln_alt/onne-beauty-lZ7tao79Y1A-unsplash.jpg',
//   'https://files.willkennedy.dev/cln_alt/toa-heftiba-TQMRdv6dFrg-unsplash.jpg',
// ]
const Simple = ({ deviceType }) => {
  const [verified, setVerified] = useState([]);

  useEffect(() => {
    axios
      .get('/api/products/?verified=true&limit=5')
      .then((response) => {
        setVerified(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {verified.map((product) => {
        return (
          <Image
            draggable={false}
            // style={{ width: '99%', height: '90%' }}
            src={product.image}
          />
        );
      })}
    </Carousel>
  );
};

export default Simple;
