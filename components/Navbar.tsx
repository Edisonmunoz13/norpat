import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

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
    name: "Proyectos",
  },
  {
    id: 3,
    name: "Preguntas frecuentes",
  },
  {
    id: 4,
    name: "Nuestros clientes",
  },
  {
    id: 5,
    name: "Contacto",
  },
];

const Navbar = () => {
  return (
    <div className={styles.headlineContainer}>
      <div className={styles.navContainer}>
        <div className={styles.mainLogo}>
          <Image
            className={styles.image}
            src="/images/norpat-ing.png"
            alt="Logo"
            width={150}
            height={150 / 3.6}
          />
        </div>
        <div className={styles.nav}>
          {sections.map((x) => (
            <div key={x.id}>
              <h3 className={styles.section}>{x.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
