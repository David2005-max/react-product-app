import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "David"; // Replace with your name or leave it empty for testing

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Image />
              <Name />
              <Price />
              <Description />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={6} className="text-center">
          <h5>
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </h5>
          {firstName && (
            <img
              src="https://via.placeholder.com/150" // Replace with your preferred image URL
              alt="Greeting"
              style={{ marginTop: "10px", borderRadius: "50%" }}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
