import React from "react";
import styles from "../styles/Proyects.module.css";
import Image from "next/image";

type proyect = {
  id: number;
  name: string;
  image: string;
  description: string;
};

const proyects: proyect[] = [
  {
    id: 1,
    name: "Lorem ipsum",
    image: "/images/1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Lorem ipsum",
    image: "/images/2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "Lorem ipsum",
    image: "/images/3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "Lorem ipsum",
    image: "/images/4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Lorem ipsum",
    image: "/images/5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
          <div className={styles.proyectCard}>
            <h3 className={styles.subtitle}>{proyect.name}</h3>
            <Image
              className={styles.image}
              key={proyect.id}
              src={proyect.image}
              alt="img"
              width={360}
              height={360 / 2.5}
            />
            <p className={styles.proyectDescription}>{proyect.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyects;
