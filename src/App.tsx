import React from "react";
import "./App.css";

import SplashHeading from "./components/SplashHeading";
import Content from "./components/Content";
import { Col, Container, Row } from "react-grid-system";

function App() {
  return (
    <div className={"App"}>
      <section className={"skew-top"}>
        <SplashHeading />
      </section>
      <section className={"skew-bottom"}>{/*<Content />*/}</section>
    </div>
  );
}

export default App;
