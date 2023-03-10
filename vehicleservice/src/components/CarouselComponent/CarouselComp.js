import React from 'react';
import Carousel from 'react-material-ui-carousel';

import img1 from '../../asset/images/img1.jpg';
import img2 from '../../asset/images/img2.jpg';
import img3 from '../../asset/images/img3.jpg';
import ImageCarousel from './ImageCarousel';
const items = [img1, img2, img3];

const CarouselComp = () => {
  return (
    <Carousel>
      {items.map((item, i) => {
        {
          console.log('item=', item);
        }
        return <ImageCarousel pic={item}></ImageCarousel>;
      })}
    </Carousel>
  );

  //return <div>{pic}</div>;
};

export default CarouselComp;
