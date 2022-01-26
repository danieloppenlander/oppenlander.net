import React from "react";
import './Content.css'

import { Container, Row, Col } from "react-grid-system";

function Content() {
  return (
    <Container className="Content">
      <p>My web page is currently under construction!</p>
      <p>
        For inquiries, please email me at{" "}
        <a href="mailto: daniel@oppenlander.net">daniel@oppenlander.net</a>.
      </p>
    </Container>
  );
}

export default Content;
