"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/SliderCarousel.module.css";

const SliderCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel>
        <div>
          <img style={{ opacity: "0.8" }} src="/images/Slider1.png" />
          <div
            className="legend"
            style={{
              width: "80%",
              color: "#231c25",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "row",
              marginBottom: "-50px",
              border: "none",
            }}
          >
            <h2
              style={{
                textAlign: "end",
                fontWeight: "500",
                marginLeft: "400px",
              }}
              className={styles.textDescription}
            >
              Más de 2000 paneles instalados, incluyendo la obra de más grande
              de argentina con una potencia de "xxxxxx" kw/hr
            </h2>
            <img
              style={{
                width: "150px",
                height: "150px",
                marginRight: "-250px",
              }}
              src="/images/panel.png"
              alt="panel"
            />
          </div>
        </div>
        <div>
          <img style={{ opacity: "0.6" }} src="/images/Slider2.png" />
          <div
            className="legend"
            style={{
              width: "80%",
              color: "#231c25",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "row",
              marginBottom: "-50px",
              border: "none",
            }}
          >
            <h2
              style={{
                textAlign: "end",
                fontWeight: "500",
                marginLeft: "400px",
              }}
              className={styles.textDescription}
            >
              Más de 2000 paneles instalados, incluyendo la obra de más grande
              de argentina con una potencia de "xxxxxx" kw/hr
            </h2>
            <img
              style={{
                width: "150px",
                height: "150px",
                marginRight: "-250px",
              }}
              src="/images/panel.png"
              alt="panel"
            />
          </div>
        </div>
        <div>
          <img style={{ opacity: "1" }} src="/images/Slider3.png" />
          <div
            className="legend"
            style={{
              width: "80%",
              color: "#231c25",
              backgroundColor: "transparent",
              display: "flex",
              justifyContent: "row",
              marginBottom: "-50px",
              border: "none",
            }}
          >
            <h2
              style={{
                textAlign: "end",
                fontWeight: "500",
                marginLeft: "400px",
              }}
              className={styles.textDescription}
            >
              Más de 2000 paneles instalados, incluyendo la obra de más grande
              de argentina con una potencia de "xxxxxx" kw/hr
            </h2>
            <img
              style={{
                width: "150px",
                height: "150px",
                marginRight: "-250px",
              }}
              src="/images/panel.png"
              alt="panel"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default SliderCarousel;
