import React from 'react';
import NavBar from '../NavBar/NavBar';
import CarouselComp from '../CarouselComponent/CarouselComp';
import AboutUs from '../AboutUs/AboutUs';
const LinkArray = ['Home', 'About Us', 'Services', 'Contact Us'];

const LandingPage = () => {
  return (
    <div>
      <NavBar links={LinkArray} />
      <CarouselComp />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
