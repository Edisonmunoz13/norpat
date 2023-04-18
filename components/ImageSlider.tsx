"use client";
import { useEffect, useState } from "react";
import styles from "../styles/ImageSlider.module.css";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const carouselWidth: number = window.innerWidth;

  useEffect(() => {
    console.log(carouselWidth);
    //setTimeout(handleNextClick, 5000);
  });

  return (
    <div className={styles.carouselMargin}>
      <div className={styles.sliderContainer}>
        <Image
          className={styles.prevButton}
          src={"/images/left.png"}
          alt="prev"
          width={carouselWidth / 30}
          height={carouselWidth / 30}
          onClick={handlePrevClick}
        />
        <Image
          className={styles.carouselImage}
          src={images[currentIndex]}
          alt="carousel"
          width={carouselWidth}
          height={carouselWidth / 4}
        />
        <Image
          className={styles.nextButton}
          src={"/images/rigth.png"}
          alt="next"
          width={carouselWidth / 30}
          height={carouselWidth / 30}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
