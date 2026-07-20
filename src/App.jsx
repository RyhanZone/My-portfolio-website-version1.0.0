import Header from "./components/Frontend/header";
import Home from "./components/Frontend/home/Home";
import Resume from "./components/Frontend/Resume/Resume";
import Portfolio from "./components/Frontend/Portfolio/Portfolio";
import Services from "./components/Frontend/Services/Services";
import Contact from "./components/Frontend/ContactUs/Contact";
import Footer from "./components/Frontend/Footer";
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#09090B] overflow-hidden">
      {/* GRID LAYER SECTION*/}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[200px_200px]"></div>

      {/* CONTENT SECTION*/}
      <div className="relative z-10">
        <Header />
        <Home />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
