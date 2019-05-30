import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Contact = (props) => {
  return (
    <Container className="contact">
      <Row>
        <Col xs={{size: 10, offset: 1}}>
          <h3 className="h3">Contact</h3>
          <p>Contact me</p>
        </Col>
      </Row>
    </Container>
  );
}


export default Contact;
