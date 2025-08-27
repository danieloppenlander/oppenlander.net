import React from "react";
import "./App.css";

import SplashHeading from "./components/SplashHeading";

function App() {
  return (
    <div className={"App"}>
      <section className={"skew-top"}>
        <SplashHeading />
      </section>
      <svg
        className={"skew"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 10,10 0,10" />
      </svg>
      <section className={"skew-bottom"}></section>
    </div>
  );
}

export default App;
