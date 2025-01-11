
import React, { Component } from "react";
import Slider from "react-slick";


function BookCarousel() {

        // Dynamically require all images in the assets/images folder
        // Dynamically load all images from the images folder
  const images = import.meta.glob('/src/assets/images/book-covers/*.{png,jpg,jpeg}', { eager: true });

  // Convert the object into an array of paths
  const imagePaths = Object.values(images).map((image) => image.default);
      


  const settings = {
        dots: false, // No navigation dots
        infinite: true, // Infinite looping
        speed: 3000, // Transition speed (ms)
        slidesToShow: 7, // Number of slides visible
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable automatic scrolling
        autoplaySpeed: 0, // Set autoplaySpeed to 0 for continuous scrolling
        cssEase: "linear", // Smooth, linear transition effect
        pauseOnHover: false, // Prevent pause on hover
        arrows: false, // Hide next/prev arrows
        focusOnSelect: false, // Disable the focus on selection    
        responsive: [ // Mobile adaptation for diffrent devices
            {
              breakpoint: 1499, 
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 1200, 
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 1000, 
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                },
              },
            {
              breakpoint: 650, 
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            
          ],  
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {imagePaths.map((src, index) => (
        <div key={index}>
          <img className="border-2 border-primary rounded-xl w-52 m-2.5 drop-shadow-xl" src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}

      </Slider>
    </div>
  );
}

export default BookCarousel;
