import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect, useState } from "react";
import { config } from "./constants/config";

const App = () => {
  const [showStarHero, setShowStarHero] = useState(false);
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }

    setTimeout(() => {
      setShowStarHero(true)
    }, 1000)
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 overflow-x-hidden">
        <div className="bg-hero-pattern relative z-0 heroElem w-full bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
          {showStarHero && (
            <StarsCanvas sphere={900} />
          )}
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
