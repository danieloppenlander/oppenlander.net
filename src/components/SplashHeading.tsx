import React from "react";
import "./SplashHeading.css";

import { Container, Row, Col } from "react-grid-system";

function SplashHeading() {
  return (
    <Container className={"SplashHeading"}>
      <Row>
        <Col md={12}>
          <img id={"headshot"} src={"/img/avatar-pro.jpg"} alt={"Headshot"}/>
        </Col>
      </Row>
      <Row>
        <Col md={7} xl={5} offset={{md: 3, xl: 4}}>
          <h1 id={"name"}>Daniel Oppenlander</h1>
          <p className={"text-italic"}>
            An engineer with a career approach that includes{" "}
            <span className={"text-blue"}>constant learning</span> and{" "}
            <span className={"text-blue"}>personal integrity</span>.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} xl={4} offset={{md: 3, xl: 4}}>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={"/files/daniel-oppenlander-resume.pdf"}
              className={"button float-left gradient-blue gradient-blue-hover"}
          >
            Resume
          </a>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.linkedin.com/in/daniel-oppenlander/"}
              className={"button float-right gradient-orange gradient-orange-hover"}
          >
            LinkedIn
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={6} xl={4} offset={{md: 3, xl: 4}}>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={"mailto: daniel@oppenlander.net"}
              className={"button float-left gradient-blue gradient-blue-hover"}
          >
            Email
          </a>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://github.com/danieloppenlander"}
              className={"button float-right gradient-orange gradient-orange-hover"}
          >
            GitHub
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SplashHeading;
