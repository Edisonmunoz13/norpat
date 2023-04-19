import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";
import ImageSlider from "../../components/ImageSlider";
import Nosotros from "../../components/Nosotros";
import OurClients from "../../components/OurClients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Proyects from "../../components/Proyects";
import Partners from "../../components/Partners";

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
            width={250}
            height={250 / 3.6}
          />
        </div>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
      </div>
      <ImageSlider images={images} />

      <Proyects />
      <OurClients />
      <Nosotros />
      <Proyects />
      <OurClients />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
