import React from "react";
import styles from "../styles/Navbar.module.css";

type section = {
  id: number;
  name: string;
};

const sections: section[] = [
  {
    id: 1,
    name: "Nosotros",
  },
  {
    id: 2,
    name: "Nuestros Clientes",
  },
  {
    id: 3,
    name: "Proyectos",
  },
  {
    id: 4,
    name: "Preguntas Frecuentes",
  },
  {
    id: 5,
    name: "Contacto",
  },
];

const Navbar = () => {
  return (
    <div className={styles.nav}>
      {sections.map((x) => (
        <div key={x.id}>
          <h3 className={styles.section}>{x.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
