"use client";
import React from "react";
import styles from "../styles/Faq.module.css";
import { useState } from "react";

type FaqProps = {
  question: string;
  answer: string;
};

const faqs: FaqProps[] = [
  {
    question: "¿Qué es la energía solar fotovoltaica y cómo funciona?",
    answer:
      "La energía solar fotovoltaica es una forma de producir electricidad a partir de la luz del sol. Los paneles solares convierten la energía solar en electricidad que se puede usar en hogares, empresas e industrias",
  },
  {
    question: "¿Qué beneficios tiene la energía solar fotovoltaica?",
    answer:
      "La energía solar fotovoltaica tiene muchos beneficios. En primer lugar, es una forma de energía renovable y limpia que no produce emisiones de gases de efecto invernadero. Además, la energía solar puede ayudar a reducir la dependencia de combustibles fósiles y disminuir los costos de la factura de energía eléctrica. Además, el uso de paneles solares puede aumentar el valor de una propiedad y mejorar su calificación energética.",
  },
  {
    question: "¿Que es un sistema On grid y Off Grid?",
    answer:
      "Un sistema On Grid o conectado a la red eléctrica es aquel en el que los paneles solares están conectados directamente a la red eléctrica local. Durante el día, cuando la energía solar generada es mayor que la demanda de energía del hogar o empresa, el exceso de energía se envía a la red eléctrica, y el propietario del sistema recibe créditos por la energía producida. Por la noche o cuando los paneles solares no generan suficiente energía, se utiliza la electricidad de la red eléctrica. Estos sistemas son más comunes en zonas urbanas y suburbanas con acceso a la red eléctrica. Por otro lado, un sistema Off Grid o desconectado de la red eléctrica es aquel en el que los paneles solares están conectados a un banco de baterías para almacenar la energía producida durante el día. Esta energía almacenada se utiliza para satisfacer las necesidades de energía durante la noche o en días nublados. Estos sistemas son más comunes en zonas rurales o remotas donde no hay acceso a la red eléctrica.",
  },
  {
    question:
      "¿Cuanto duran los paneles solares y que mantenimiento requieren?",
    answer:
      "Los paneles solares están diseñados para durar más de 25 años, y muchos fabricantes ofrecen garantías de 25 años o más en sus productos. Los Paneles Solares requieren un mínimo mantenimiento, el cual es un servicio provisto por NorPat Ingeniería.",
  },
  {
    question:
      "¿Es necesario contar con una batería para que mi sistema solar funcione?",
    answer:
      "No necesariamente. Los paneles solares pueden estar conectados directamente a la red eléctrica, lo que permite que el exceso de energía solar se venda a la compañía eléctrica local a través de un acuerdo de medición neta. Sin embargo, si se desea almacenar la energía solar para su uso posterior, una batería es una opción recomendada. Las baterías pueden almacenar el exceso de energía solar durante el día para su uso durante la noche o en días nublados.",
  },
  {
    question:
      "¿Cómo la energía solar fotovoltaica contribuye a los Objetivos de Desarrollo Sostenible de la ONU y cuáles son los beneficios ambientales y comerciales de su implementación?",
    answer:
      "La energía solar fotovoltaica tiene múltiples beneficios ambientales y comerciales que contribuyen a los Objetivos de Desarrollo Sostenible (ODS) de la ONU. En primer lugar, la energía solar es una fuente de energía limpia y renovable (ODS 7 - Energía Asequible y No Contaminante) que reduce las emisiones de gases de efecto invernadero y contribuye a mitigar el cambio climático (ODS 13 - Acción por el clima). Además, la implementación de sistemas de energía solar fotovoltaica puede aumentar la eficiencia energética y disminuir los costos de energía, lo que puede impulsar el crecimiento económico (ODS 8 - Trabajo decente y crecimiento económico) y reducir la pobreza energética (ODS 1 - Fin de la pobreza). También puede mejorar la calidad de vida y la salud pública, al reducir la contaminación atmosférica y el riesgo de enfermedades relacionadas con la contaminación del aire (ODS 3 - Salud y bienestar).",
  },
  {
    question: "¿Qué es el bombeo solar y cómo funciona?",
    answer:
      "El bombeo solar es una tecnología que utiliza la energía solar fotovoltaica para bombear agua de pozos, ríos u otras fuentes de agua hacia la superficie.",
  },
  {
    question:
      "¿Cuáles son los beneficios del bombeo solar en comparación con los sistemas de bombeo convencionales?",
    answer:
      "En primer lugar, utilizan energía solar fotovoltaica, una fuente de energía limpia y renovable, lo que significa que no emiten gases de efecto invernadero y no dependen de combustibles fósiles. Además, los sistemas de bombeo solar son más fáciles de instalar y mantener que los sistemas convencionales, ya que no requieren conexión a la red eléctrica y tienen menos piezas móviles. También son más económicos a largo plazo, ya que los costos de mantenimiento y operación son más bajos y la energía solar es gratuita.",
  },
  {
    question:
      "¿Qué factores deben tenerse en cuenta al seleccionar un sistema de bombeo solar?",
    answer:
      "Al seleccionar un sistema de bombeo solar, es importante considerar varios factores, como la ubicación geográfica, el caudal y la profundidad del pozo, la demanda de agua, el tipo de cultivo o uso final del agua, entre otros. También es importante tener en cuenta la calidad del agua y el tipo de bomba y paneles solares que se utilizarán. Desde NorPat Ingenieria nos aseguramos de realizar un correcto diseño del sistema de bombeo y su adecuada instalación.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      <div>
        <h1 className={styles.title}>Preguntas Frecuentes</h1>
        <div className={styles.faqContainer}>
          {faqs.map(({ question, answer }, index) => (
            <div className={styles.faqItem} key={index}>
              <h3
                className={styles.question}
                onClick={() => handleClick(index)}
              >
                {question}
              </h3>

              {activeIndex === index && (
                <p className={styles.answer}>{answer}</p>
              )}
              <div className={styles.line}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
