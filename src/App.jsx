import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
