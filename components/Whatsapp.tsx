"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: "999",
      }}
    >
      <Link legacyBehavior href="https://wa.me/5492984665081">
        <a target="_blank" rel="noopener noreferrer">
          <Image
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
