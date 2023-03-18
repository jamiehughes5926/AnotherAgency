import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import RedPage from "./pages/RedPage";
import GreenPage from "./pages/GreenPage";
import BluePage from "./pages/BluePage";
import OrangePage from "./pages/OrangePage";
import "./App.css";

const App = () => {
  const scrollToElement = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link onClick={() => scrollToElement("red")}>Red</Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("green")}>Green</Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("blue")}>Blue</Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("orange")}>Orange</Link>
            </li>
          </ul>
        </nav>
        <main>
          <RedPage />
          <GreenPage />
          <BluePage />
          <OrangePage />
        </main>
      </div>
    </Router>
  );
};

export default App;
