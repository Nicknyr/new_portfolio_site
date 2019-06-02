import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  return (
    <Row className="footer">
      <Col xs={{size: 12}} md={{size: 6}}>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    color="#92A2B1"
                  />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'github-square']}
                    size="2x"
                    color="#92A2B1"
                  />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'stack-overflow']}
                    size="2x"
                    color="#92A2B1"
                  />
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={{size: 12}} md={{size: 6}}>
        <p className="copyright">&#169; 2019 Nick Kinlen</p>
      </Col>
    </Row>
  );
}


export default Footer;
