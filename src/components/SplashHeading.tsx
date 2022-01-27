import React from "react";
import "./SplashHeading.css";

import { Container, Row, Col } from "react-grid-system";

function SplashHeading() {
  return (
    <Container className={"SplashHeading centered"}>
      <Row>
        <Col md={6} className={"heading"}>
          <h1>Daniel Oppenlander</h1>
          <p>
            An engineer with a career approach that includes constant learning
            and personal integrity.
          </p>
        </Col>
        <Col md={3} offset={{ md: 3 }} className={"buttons"}>
          <a href={"/daniel-oppenlander-resume.pdf"} className={"button-a"}>
            <div className={"button"}>Resume</div>
          </a>
          <a href={"mailto: daniel@oppenlander.net"} className={"button-a"}>
            <div className={"button"}>Email</div>
          </a>
          <a
            href={"https://www.linkedin.com/in/daniel-oppenlander/"}
            className={"button-a"}
          >
            <div className={"button"}>LinkedIn</div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SplashHeading;
