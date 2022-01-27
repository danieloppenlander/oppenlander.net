import React from "react";
import "./App.css";

import SplashHeading from "./components/SplashHeading";

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
