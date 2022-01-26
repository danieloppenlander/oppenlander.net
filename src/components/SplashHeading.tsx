import React from "react";
import "./SplashHeading.css";

import { Container, Row, Col } from "react-grid-system";

function SplashHeading() {
  return (
    // <section className="SplashHeading centered">
    <Container className="SplashHeading centered">
      <Row>
        <Col sm={6}>
          <h1>Daniel Oppenlander</h1>
          <p>
            An engineer with a career approach that includes constant learning
            and personal integrity.
          </p>
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default SplashHeading;
