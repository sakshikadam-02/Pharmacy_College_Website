import { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);


  const slides = [
    {
      id: 1,
      imageUrl: '/images/img1.jpg',
      alt: 'VJ Shinde Polytechnic Campus View',
      caption: 'Beautiful Campus Infrastructure'
    },
    {
      id: 2,
      imageUrl: '/images/img2.jpg',
      alt: 'Computer Lab Facilities',
      caption: 'State-of-the-art Computer Labs'
    },
    {
      id: 3,
      imageUrl: '/images/img3.jpg',
      alt: 'College Event',
      caption: 'Annual Technical Festival'
    },
    {
      id: 4,
      imageUrl: '/images/img4.jpg',
      alt: 'Mechanical Workshop',
      caption: 'Fully Equipped Workshops'
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="image-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            aria-hidden={index !== currentSlide}
          >
            <div className="slide-content">
              <h3>{slide.caption}</h3>
              <p>VJ Shinde Polytechnic - Excellence in Technical Education</p>
            </div>
          </div>
        ))}

        <button className="slider-btn prev" onClick={goToPrev} aria-label="Previous slide">
          &lt;
        </button>
        <button className="slider-btn next" onClick={goToNext} aria-label="Next slide">
          &gt;
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;