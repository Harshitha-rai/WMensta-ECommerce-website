import React, { useState, useEffect } from 'react';
import {HeroImage} from '../data/HeroImage';
import '../asset/hero.css';
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = HeroImage.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
      <div className="slider">
        
        {HeroImage.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? "slide current" : "slide"} key={index}>
              {index === currentSlide && (
                <div>
                  <img src={slide.imgURL} alt="slide" className="image" />
                  <div className="content">
                    <p>{slide.description}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
}

export default Hero