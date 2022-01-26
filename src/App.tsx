import React from "react";
import "./App.css";

import About from "./components/About";
import { Container, Row, Col } from "react-grid-system";
import SplashHeading from "./components/SplashHeading";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <SplashHeading />
      <Content />
    </div>
  );
}

export default App;
