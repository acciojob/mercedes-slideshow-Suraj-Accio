import React, { useState, useEffect } from "react";

function Slideshow({ images, interval }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div>
      <img width="100%" ali src={images[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
}

export default Slideshow;