import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";
import ImageSlider from "../../components/ImageSlider";
import Nosotros from "../../components/Nosotros";
import OurClients from "../../components/OurClients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Proyects from "../../components/Proyects";

const imageHeight: number = 250;

const images: string[] = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
];
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainLogo}>
          <Image
            src="/images/norpat-ing.png"
            alt="Logo"
            width={imageHeight}
            height={imageHeight / 3.6}
          />
        </div>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
      </div>
      <ImageSlider images={images} />
      <Proyects />
      <Nosotros />
      <Proyects />
      <OurClients />
      <Contact />
      <Footer />
    </>
  );
}
