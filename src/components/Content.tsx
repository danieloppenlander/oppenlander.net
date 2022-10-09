import React from "react";
import "./Content.css";

import { Col, Container, Row } from "react-grid-system";

function Content() {
  return (
    <Container className={"Content"}>
      <Row>
        <Col md={12} lg={4}>
          <div className={"text-box gradient-blue"}>
            <p>My web page is currently under construction!</p>
            <p>
              For inquiries, please email me at{" "}
              <a href="mailto: daniel@oppenlander.net">
                daniel@oppenlander.net
              </a>
              .
            </p>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className={"text-box gradient-blue"}>
            <p>My web page is currently under construction!</p>
            <p>
              For inquiries, please email me at{" "}
              <a href="mailto: daniel@oppenlander.net">
                daniel@oppenlander.net
              </a>
              .
            </p>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className={"text-box gradient-blue"}>
            <p>My web page is currently under construction!</p>
            <p>
              For inquiries, please email me at{" "}
              <a href="mailto: daniel@oppenlander.net">
                daniel@oppenlander.net
              </a>
              .
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Content;
