import React from "react";
import styles from "../styles/Proyects.module.css";
import Image from "next/image";

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
    image: "/images/slider4.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 2,
    name: "Lorem ipsum",
    image: "/images/2.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 3,
    name: "Lorem ipsum",
    image: "/images/3.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 4,
    name: "Lorem ipsum",
    image: "/images/4.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Potencia de más de 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 5,
    name: "Lorem ipsum",
    image: "/images/5.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Potencia de más de 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
  {
    id: 6,
    name: "Lorem ipsum",
    image: "/images/5.png",
    paneles: "Instalación de 2000 paneles solares",
    potencia: "Pontecia de más 3000 KWh/día",
    description:
      "Instalación de características similares más grande de Argentina",
  },
];

const Proyects = () => {
  return (
    <div className={styles.proyectContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Proyectos</h2>
      </div>
      <div className={styles.proyectsContainer}>
        {proyects.map((proyect) => (
          <div key={proyect.id} className={styles.proyectCard}>
            <h3 className={styles.subtitle}>{proyect.name}</h3>
            <Image
              className={styles.image}
              src={proyect.image}
              alt="img"
              width={width}
              height={width / 2.5}
            />
            <p className={styles.proyectDescription}>- {proyect.paneles}</p>
            <p className={styles.proyectDescription}>- {proyect.potencia}</p>
            <p className={styles.proyectDescription}>- {proyect.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
