import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Typewriter from 'typewriter-effect';
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
