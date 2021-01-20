import React from "react";
import ReactDOM from "react-dom";
import Cover from "./components/cover";
import Navigation from "./components/navigation";
import Description from "./components/description";
import Carousel from "./components/carousel";
import Timeline from "./components/timeline";
import Contact from "./components/contact";
import styles from "./static/css/main.css";

function App() {
  return (
    <div id="App">
      <Navigation />
      <Cover />
      <Description />
      <Carousel />
      <Timeline />
      <Contact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
