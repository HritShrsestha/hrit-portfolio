import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Courses from "./components/Courses.jsx";
import Certificates from "./components/Certificates.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-bg text-ink font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Courses />
        <Certificates />
             </main>
      <Footer />
    </div>
  );
}
