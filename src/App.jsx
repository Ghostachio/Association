import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
const App = () => {
  const projects = ["one", "two", "three", "foor", "five", "six"];

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Who />
      <Projects projects={projects} />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
