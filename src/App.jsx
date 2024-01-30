import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

const App = () => {
  return (
    <Parallax pages={5}>
      <ParallaxLayer>
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer>
        <About />
      </ParallaxLayer>
      <Skills />
      <Projects />
      <Contact />
    </Parallax>
  );
};

export default App;
