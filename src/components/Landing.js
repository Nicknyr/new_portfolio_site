import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';


const Landing = (props) => {
  return (
      <Row className="landing">
        <Col className="introduction" xs ={{size: 10, offset: 1}}>
          <h1 className="introduction-h1">My name is Nick and I'm a web developer from NYC</h1>
          <p className="introduction-p">I specialize in building web applications with the MERN stack</p>
          <Button color="secondary" id="contact-button">Contact Me</Button>{' '}
        </Col>
      </Row>
  );
}


export default Landing;
