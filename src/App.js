import { BrowserRouter as Router, Link } from "react-router-dom";
import { scroller } from "react-scroll";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
              <Link onClick={() => scrollToElement("home")}>HOME</Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("portfolio")}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("about")}>ABOUT</Link>
            </li>
            <li>
              <Link onClick={() => scrollToElement("contact")}>CONTACT</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Home />
          <Portfolio />
          <About />
          <Contact />
        </main>
      </div>
    </Router>
  );
};

export default App;
