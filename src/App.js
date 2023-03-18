import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
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
          <Element name="red" className="section red" />
          <Element name="green" className="section green" />
          <Element name="blue" className="section blue" />
          <Element name="orange" className="section orange" />
        </main>
      </div>
    </Router>
  );
};

export default App;
