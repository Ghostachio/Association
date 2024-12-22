import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Team from "./components/Team";
import { projects } from "./data";

const App = () => {
  return (
    <main className="flex flex-col items-center text-white">
      <Navbar />
      <Hero />
      <Who />
      <Projects projects={projects} />
      <Team />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
