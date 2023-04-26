"use client";
import React from "react";
import styles from "../styles/Proyects.module.css";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type proyect = {
  id: number;
  name: string;
  image: string;
  paneles: string;
  potencia: string;
  description: string;
};

const width: number = 360;

const proyects: proyect[] = [
  {
    id: 1,
    name: "Lorem ipsum",
    image: "/images/1.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 2,
    name: "Lorem ipsum",
    image: "/images/2.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 3,
    name: "Lorem ipsum",
    image: "/images/3.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 4,
    name: "Lorem ipsum",
    image: "/images/4.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Potencia de más de 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 5,
    name: "Lorem ipsum",
    image: "/images/5.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Potencia de más de 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 6,
    name: "Lorem ipsum",
    image: "/images/5.jpg",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Pontecia de más 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const Proyects = () => {
  return (
    <div className={styles.proyectContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Proyectos</h2>
      </div>
      <div className={styles.containerContainer}>
        <div className={styles.proyectsContainer}>
          <Carousel
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
            {proyects.map((proyect) => (
              <div key={proyect.id} className={styles.proyectCard}>
                <Image
                  className={styles.image}
                  src={proyect.image}
                  alt="img"
                  width={width}
                  height={width / 2.5}
                />
                <h3 className={styles.subtitle}>{proyect.name}</h3>
                <div className={styles.proyectDescription}>
                  <p>- {proyect.paneles}</p>
                  <p>- {proyect.potencia}</p>
                  <p>- {proyect.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
