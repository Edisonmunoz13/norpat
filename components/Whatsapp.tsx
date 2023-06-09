"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Whatsapp.module.css";

const Whatsapp = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "-40px",
        bottom: "25px",
        zIndex: "999",
      }}
    >
      <Link legacyBehavior href="https://wa.me/573105709217">
        <a target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.image}
            src="/images/wha.png"
            alt="Conectarse por WhatsApp"
            width={70}
            height={70}
          />
        </a>
      </Link>
    </div>
  );
};

export default Whatsapp;
