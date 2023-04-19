import React from "react";
import styles from "../styles/Nosotros.module.css";
import Image from "next/image";

type misionData = {
  id: number;
  title: string;
  contain: string;
};

type professionalProps = {
  id: number;
  image: string;
  name: string;
  info: string;
};

const usData: misionData[] = [
  {
    id: 1,
    title: "Misión",
    contain:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    title: "Visión",
    contain:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const ourProfessionals: professionalProps[] = [
  {
    id: 1,
    image: "/images/nico.jpg",
    name: "INGENIERO NICOLAS GORSKY",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 2,
    image: "/images/nico.jpg",
    name: "INGENIERO NICOLAS GORSKY",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 3,
    image: "/images/nico.jpg",
    name: "INGENIERO NICOLAS GORSKY",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
  {
    id: 4,
    image: "/images/nico.jpg",
    name: "INGENIERO NICOLAS GORSKY",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  },
];

const Nosotros = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Nosotros</h2>
      </div>
      <div className={styles.textContainer}>
        {usData.map((text) => (
          <div key={text.id} className={styles.itemTextContainer}>
            <h2 className={styles.subtitle}>{text.title}</h2>
            <p className={styles.paragraph}> {text.contain}</p>
          </div>
        ))}
      </div>

      <div>
        <div className={styles.professionalContainer}>
          {ourProfessionals.map((professional) => (
            <div className={styles.professionalCard}>
              <Image
                className={styles.professionalImage}
                key={professional.id}
                src={professional.image}
                alt="nico"
                width={150}
                height={150}
              />
              <h3 className={styles.name}>{professional.name}</h3>
              <p className={styles.info}>{professional.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nosotros;
