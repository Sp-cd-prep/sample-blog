import React from "react";
import Navbar from "./Navbar";
import './component.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-container">
        <div className="header-container">
          <div className="box box1">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
          <div className="box box2">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
          <div className="box box3">
            <p className="headerbox-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, et!
            </p>
          </div>
        </div>
      </div>

    <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={10}
     totalSlides={3}
    >

    <Slider>
      <Slide index={0}><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80"/></Slide>
      <Slide index={1}><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80"/></Slide>
      <Slide index={2}><img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80"/></Slide>
    </Slider>

    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
   </CarouselProvider>




   <Carousel>
      <div>
         <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80" />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80" />
         <p className="legend">Legend 2</p>
       </div>
      <div>
      <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=600&quality=80" />
      <p className="legend">Legend 3</p>
     </div>
   </Carousel>

    </>
  );
};

export default Home;
