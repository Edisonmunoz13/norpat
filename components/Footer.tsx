import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <Image
        className={styles.footerLogo}
        src={"/images/norpat-ing.png"}
        alt="logo"
        width={100}
        height={100 / 3.6}
      />
      <h2 className={styles.footerText}>
        DIRECCION: Algún lugar en parque industrial de General Roca
        <br /> MAil: norpat@norpat.com.ar
        <br /> TEL: +542984000000
      </h2>

      <div>
        <Image
          src={"/images/redesOrange.png"}
          alt="redes"
          width={119}
          height={21.7}
        />
      </div>
    </div>
  );
};

export default Footer;
