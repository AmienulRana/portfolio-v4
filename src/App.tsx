import { BrowserRouter } from "react-router-dom";

import {
  About,
  Hero,
  Navbar,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0 overflow-x-hidden">
        <div className="bg-hero-pattern heroElem w-full bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
