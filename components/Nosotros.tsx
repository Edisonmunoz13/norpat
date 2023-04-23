import React from "react";
import styles from "../styles/Nosotros.module.css";
import Image from "next/image";

type misionData = {
  id: number;
  title: string;
  contain: string;
  image: string;
  icons: { id: number; image: string }[];
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
    title:
      "Tenemos la misión de desarrollar e implementar proyectos renovables y tecnologías sustentables",
    contain: "lorem ipsum",
    image: "1.png",
    icons: [
      { id: 1, image: "/images/solar1.png" },
      { id: 1, image: "/images/solar2.png" },
      { id: 1, image: "/images/solar3.png" },
    ],
  },
  {
    id: 2,
    title:
      "Somos referentes nacionales en proyectos de energías renovables y soluciones energéticas",
    contain: "lorem ipsum",
    image: "1.png",
    icons: [
      { id: 1, image: "/images/solarRef1.png" },
      { id: 1, image: "/images/solarRef2.png" },
      { id: 1, image: "/images/solarRef3.png" },
    ],
  },
];

const ourProfessionals: professionalProps[] = [
  {
    id: 1,
    image: "/images/nico.jpg",
    name: "Ing:Nicolas Pedro Gorsky",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    image: "/images/nico.jpg",
    name: "Ing:Nicolas Pedro Gorsky",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    image: "/images/nico.jpg",
    name: "Ing:Nicolas Pedro Gorsky",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const Nosotros = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Nosotros, <br></br>
            Por qué Norpat?
          </h2>
        </div>
        <div className={styles.misionContainer}>
          <div className={styles.textContainer}>
            {usData.map((text) => (
              <div key={text.id} className={styles.itemTextContainer}>
                <div className={styles.subtitleContainer}>
                  <h2 className={styles.subtitle}>{text.title}</h2>
                </div>
                <div className={styles.solarIcons}>
                  {text.icons.map((icon) => (
                    <Image
                      className={styles.solarIcon}
                      src={icon.image}
                      alt={`${icon.id}`}
                      width={100}
                      height={100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            Nuestro <br></br> equipo de Profesionales
          </h2>
        </div>
        <div className={styles.professionalContainer}>
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
      </div>
    </>
  );
};

export default Nosotros;
