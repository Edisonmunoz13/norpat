"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/OurClients.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface clientProps {
  id: number;
  image: string;
}

const clients: clientProps[] = [
  { id: 1, image: "/images/isla.png" },
  { id: 2, image: "/images/moño.png" },
  { id: 3, image: "/images/multi.png" },
  { id: 4, image: "/images/nippon.png" },
  { id: 5, image: "/images/logistica.png" },
];

let size = 1080 / clients.length;

if (typeof window !== "undefined") {
  let size: number = window.innerWidth / 8;
}

const OurClients = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Clientes que <br></br>Confian en nosotros
        </h2>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel
          className={styles.clientsList}
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {clients.map((client) => (
            <Image
              className={styles.logoItem}
              key={client.id}
              src={client.image}
              alt={`${client.id}`}
              width={150}
              height={150}
            />
          ))}
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default OurClients;
