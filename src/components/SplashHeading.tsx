import React from "react";
import "./SplashHeading.css";

import { Container, Row, Col } from "react-grid-system";

function SplashHeading() {
  return (
    <Container className={"SplashHeading"}>
      <Row>
        <Col md={12} lg={6}>
          <h1>Daniel Oppenlander</h1>
          <p className={"text-italic"}>
            An engineer with a career approach that includes{" "}
            <span className={"text-blue"}>constant learning</span> and{" "}
            <span className={"text-blue"}>personal integrity</span>.
          </p>
        </Col>
        <Col md={12} lg={6}>
          <Row>
            <Col xs={6} lg={12} offset={{ lg: 6 }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"/files/daniel-oppenlander-resume.pdf"}
                className={"button gradient-blue gradient-blue-hover"}
              >
                Resume
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"mailto: daniel@oppenlander.net"}
                className={"button gradient-blue gradient-blue-hover"}
              >
                Email
              </a>
            </Col>
            <Col xs={6} lg={12} offset={{ lg: 6 }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/daniel-oppenlander/"}
                className={"button gradient-orange gradient-orange-hover"}
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/danieloppenlander"}
                className={"button gradient-orange gradient-orange-hover"}
              >
                GitHub
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default SplashHeading;
