import React from "react";
import "./SplashHeading.css";

import { Container, Row, Col } from "react-grid-system";

function SplashHeading() {
  return (
    <Container className={"SplashHeading"}>
      <Row>
        <Col md={12}>
          <img id={"headshot"} src={"/img/avatar-pro.webp"} alt={"Headshot"} />
        </Col>
      </Row>
      <Row>
        <Col md={7} xl={5} offset={{ md: 3, xl: 4 }}>
          <h1>Daniel Oppenlander</h1>
          <p className={"subtitle text-orange"}>Software Engineer</p>
          <p className={"text-italic"}>
            <span>Proven record of </span>
            <span className={"text-blue"}>taking ownership </span>
            <span>and </span>
            <span className={"text-blue"}>effectively collaborating </span>
            <span>over the entire product lifecycle. </span>
            <span>
              Experienced in full stack development, security, networking,
              DevOps, and cloud.{" "}
            </span>
            <span className={"text-orange"}>Constantly learning.</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} xl={4} offset={{ md: 3, xl: 4 }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://standardresume.co/r/p92k4eP_NTp0HaprL1wzM"}
            className={"button float-left gradient-blue gradient-blue-hover"}
          >
            Resume
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/daniel-oppenlander/"}
            className={
              "button float-right gradient-orange gradient-orange-hover"
            }
          >
            LinkedIn
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={6} xl={4} offset={{ md: 3, xl: 4 }}>
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
            className={
              "button float-right gradient-orange gradient-orange-hover"
            }
          >
            GitHub
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SplashHeading;
