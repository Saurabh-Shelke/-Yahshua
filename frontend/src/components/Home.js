import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="mt-5 text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Welcome to Our Application</h1>
          <p className="mt-3">
            This is a secure and user-friendly platform designed to provide
            seamless authentication and personalized content. Whether you're
            here to manage your account or explore features, we've got you
            covered.
          </p>
          <Button variant="primary" href="/login" className="mt-3">
            Get Started
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Secure Login</Card.Title>
              <Card.Text>
                Enjoy a secure and smooth login process with token-based
                authentication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Personalized Dashboard</Card.Title>
              <Card.Text>
                Access user-specific content and manage your account
                effortlessly.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Simple Navigation</Card.Title>
              <Card.Text>
                Quickly find the features you need with our intuitive interface.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
