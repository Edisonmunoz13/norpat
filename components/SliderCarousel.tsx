"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/SliderCarousel.module.css";
import Image from "next/image";

type carouselImageProps = {
  id: number;
  image: string;
  leyend: string[];
  styles: string[];
};

const carouselImages: carouselImageProps[] = [
  {
    id: 1,
    image: "/images/Slider4.png",
    leyend: [
      "Instalación más grande de Argentina con más de 2000 paneles y una potencia de 3000 KWt",
      "/images/panel.png",
    ],
    styles: ["leyend1", "icon1"],
  },
  {
    id: 2,
    image: "/images/Slider2.png",
    leyend: [
      "Disminución en las emisiones de CO2 en 10 millones de mtrs3",
      "/images/co2.png",
    ],
    styles: ["leyend2", "icon2"],
  },
  {
    id: 3,
    image: "/images/Slider4.png",
    leyend: [
      "Instalación más grande de Argentina con más de 2000 paneles y una potencia de 3000 KWt",
      "/images/panel.png",
    ],
    styles: ["leyend3", "icon3"],
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

console.log(carouselImages[0].styles[1]);

const SliderCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.carousel}
        swipeable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .1"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {carouselImages.map((image) => (
          <div key={image.id}>
            <Image
              className={image.styles[1]}
              src={image.image}
              alt={`${image.id}`}
              width={1920}
              height={500}
              loading="eager"
            />
            <div className={styles.leyendContainer}>
              <h2 className={styles.carouselLeyend}>{image.leyend[0]}</h2>
              <Image
                className={styles.leyendIcon}
                src={image.leyend[1]}
                alt={`${image.id + 3}`}
                width={100}
                height={100}
              />
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default SliderCarousel;
