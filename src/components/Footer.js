import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faBook } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  return (
    <Row className="footer">
      <Col xs={{size: 12}}>
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    color="snow"
                  />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'github-square']}
                    size="2x"
                    color="snow"
                  />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                    icon={['fab', 'stack-overflow']}
                    size="2x"
                    color="snow"
                  />
            </a>
          </li>
        </ul>
      </Col>
      <Col xs={{size: 12}}>
        <p className="copyright">&#169; 2019 Nick Kinlen</p>
      </Col>
    </Row>
  );
}


export default Footer;
