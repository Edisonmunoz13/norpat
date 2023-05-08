import React from "react";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <div>
      <h2 className={styles.title}>
        Servicios <br />
        que ofrecemos
      </h2>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesItem}></div>
      </div>
    </div>
  );
};

export default Services;
