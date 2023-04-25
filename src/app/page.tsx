import Navbar from "../../components/Navbar";
import styles from "./page.module.css";
import Nosotros from "../../components/Nosotros";
import OurClients from "../../components/OurClients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Proyects from "../../components/Proyects";
import Partners from "../../components/Partners";
import SliderCarousel from "../../components/SliderCarousel";

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
      </div>
      <SliderCarousel />
      <Nosotros />
      <Proyects />
      <OurClients />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
