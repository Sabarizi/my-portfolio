import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
   <>
<Navbar />
<Hero />
<About />
<Services />
<Contact />
<Footer />
   </>
  );
}
