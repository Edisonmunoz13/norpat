import Navbar from "../../components/Navbar";
import styles from "./page.module.css";
import Nosotros from "../../components/Nosotros";
import OurClients from "../../components/OurClients";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Proyects from "../../components/Proyects";
import SliderCarousel from "../../components/SliderCarousel";
import Whatsapp from "../../components/Whatsapp";
import Faq from "../../components/Faq";
import Services from "../../components/Services";

export default function Home() {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
      </div>
      <SliderCarousel />
      <Nosotros />
      <Services />
      <Proyects />
      <Faq />
      <OurClients />
      <Contact />
      <Footer />
      <Whatsapp />
    </>
  );
}
