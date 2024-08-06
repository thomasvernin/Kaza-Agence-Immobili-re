import { useState } from "react";
import arrowNext from "../../assets/images/arrow-next.png";
import arrowPrev from "../../assets/images/arrow-prev.png";
import "./Slideshow.css";


const Slideshow = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
  };

  const prevImage = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? length - 1 : prevCurrent - 1));
  };

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div key={index} style={{ display: index === current ? "block" : "none" }}>
          <img className="housing-img" src={image} alt="housing" />
        </div>
      ))}

      {length > 1 && (
        <div className="slide-controls">
          <img src={arrowPrev} onClick={prevImage} className="arrow" alt="Preview icon" />
          <img src={arrowNext} onClick={nextImage} className="arrow" alt="Next icon" />
        </div>
      )}

      {length > 1 && (
        <div className="slideshow-counter">
          <p>
            {current + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
};


export default Slideshow;