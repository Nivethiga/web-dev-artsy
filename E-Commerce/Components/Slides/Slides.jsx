import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../Slidespic/slide1.jpeg";
import img2 from "../Slidespic/slide22.jpeg";
import img3 from "../Slidespic/slide33.jpeg";


const Slides = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   
  };
  return (
   
    <div style={{ width: '90vw', maxWidth: '1600px', margin:'0 auto' }}>
    <br></br><br></br>
  <Slider {...settings}>
  
    <div style={{ display:'block', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src={img1} alt="Slide 1" style={{ width: '90vw', maxWidth: '98%',maxHeight:'155%',height:'500px' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src={img2} alt="Slide 2" style={{ width: '90vw', maxWidth: '98%', height: '500px' }} />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="/movie-info"> {/* Add the appropriate path to the movie info page */}
        <img src={img3} alt="Slide 3" style={{ width: '90vw', maxWidth: '98%', height: '500px' }} />
      </a>
    </div>
   
   
  </Slider>
 </div> 
 );
};

export default Slides;