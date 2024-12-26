import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
// import About from "../components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <main className="mx-16">
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        {/* <About /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
