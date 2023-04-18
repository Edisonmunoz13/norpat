import React from "react";
import styles from "../styles/Navbar.module.css";

const sections: string[] = [
  "Nosotros",
  "Nuestros Clientes",
  "Proyectos",
  "Preguntas Frecuentes",
  "Contacto",
];

const Navbar = () => {
  return (
    <div className={styles.nav}>
      {sections.map((x) => (
        <div>
          <h3 className={styles.section}>{x}</h3>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
