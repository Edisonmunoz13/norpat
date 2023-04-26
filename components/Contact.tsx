"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from "../styles/Contact.module.css";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // Redirigir al usuario a la página de confirmación o mostrar mensaje de éxito
    } else {
      // Mostrar mensaje de error al usuario
    }
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={"/images/norpat-ing.png"}
            alt="logo"
            width={400}
            height={400 / 3.6}
          />
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.title}>CONTACTO</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="name">
              Nombre:
            </label>
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />

            <label className={styles.label} htmlFor="email">
              Correo electrónico:
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label className={styles.label} htmlFor="subject">
              Asunto:
            </label>
            <input
              className={styles.input}
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />

            <label className={styles.label} htmlFor="message">
              Mensaje:
            </label>
            <textarea
              className={styles.messageArea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button className={styles.sendButton} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
