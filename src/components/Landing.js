import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Computer from '../images/computer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Landing = (props) => {
  return (
      <Row className="landing scroll">
        <Col className="introduction" xs ={{size: 10, offset: 1}} sm={{size: 8}} md={{size: 6}}>
          <h1 className="introduction-h1">Hi, my name is Nick and I'm a full stack web developer from </h1>
          <h1 className="introduction-nyc">New York City</h1>
        </Col>
        <Col className="computer" xs={{size: 10, offset: 1}} sm={{size: 3}} md={{size: 4, offset: 1}}>
          <FontAwesomeIcon
                icon={faLaptopCode}
                size="10x"
                color="snow"
              />
        </Col>
      </Row>
  );
}


export default Landing;
