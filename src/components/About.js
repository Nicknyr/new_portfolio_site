import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const About = (props) => {
  return (
    <Container className="about">
      <Row>
        <Col xs={{size: 10, offset: 1}}>
          <h3 className="h3">About</h3>
          <p>I am a full stack web developer from the greater New York City area. I specialize in creating web applications using the MERN stack (MongoDB, Express, React, and Node.js). I have experience with responsive design and various Javascript libraries such as Redux, Leaflet, Mapbox, D3, JQuery</p>
          <p>I am a native New Yorker, U.S. Navy veteran, and diehard New York Rangers fan</p>
        </Col>
      </Row>
    </Container>
  );
}


export default About;
