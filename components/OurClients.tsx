"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/OurClients.module.css";

interface clientProps {
  id: number;
  image: string;
}

const clients: clientProps[] = [
  { id: 1, image: "/images/isla.png" },
  { id: 2, image: "/images/moño.png" },
  { id: 3, image: "/images/multi.png" },
  { id: 4, image: "/images/nippon.png" },
  { id: 5, image: "/images/logistica.png" },
];

let size: number = window.innerWidth / 8;

const OurClients = () => {
  return (
    <div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Clientes que confían</h2>
      </div>
      <div className={styles.clientsList}>
        {clients.map((client) => (
          <Image
            src={client.image}
            alt={`${client.id}`}
            width={size}
            height={size / 1.35}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
