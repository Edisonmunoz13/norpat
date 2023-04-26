import React from "react";
import styles from "../styles/Faq.module.css";

type FaqProps = {
  question: string;
  answer: string;
};

const faqs: FaqProps[] = [
  {
    question: "¿Cómo puedo contactar al soporte técnico?",
    answer:
      "Puedes contactarnos por correo electrónico o a través de nuestro chat en línea.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos pagos con tarjeta de crédito y débito, PayPal y transferencias bancarias.",
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer:
      "Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días para recibir un reembolso completo.",
  },
  {
    question: "¿Cómo puedo contactar al soporte técnico?",
    answer:
      "Puedes contactarnos por correo electrónico o a través de nuestro chat en línea.",
  },
  {
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos pagos con tarjeta de crédito y débito, PayPal y transferencias bancarias.",
  },
  {
    question: "¿Cuál es la política de devoluciones?",
    answer:
      "Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días para recibir un reembolso completo.",
  },
];

const Faq = () => {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Preguntas Frecuentes</h1>
        <div className={styles.faqContainer}>
          {faqs.map(({ question, answer }, index) => (
            <div className={styles.faqItem} key={index}>
              <h3 className={styles.question}>{question}</h3>
              <p className={styles.answer}>{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
