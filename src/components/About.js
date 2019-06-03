import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faAnchor, faHockeyPuck } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import Fade from 'react-reveal/Fade';

const About = (props) => {
  return (
    <Fade bottom>
    <Container className="about scroll" id="about">
      <Row>
        <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}}>
          <h3 className="h3">About</h3>
            <p>
                I am a full stack web developer from the greater New York City area. I specialize in creating web applications using the MERN stack (MongoDB, Express, React, and Node.js). I have experience with responsive design and various Javascript libraries such as Redux, Leaflet, Mapbox, D3, JQuery.
            </p>
            <p>I am a native New Yorker <span>
            <FontAwesomeIcon
                  icon={faBuilding}
                  size="md"
                  color="#FB5607"
            />
          </span>
              <span>,</span> U.S. Navy veteran <span>
             <FontAwesomeIcon
                icon={faAnchor}
                size="md"
                color="#FB5607"
              />
             </span>
              <span>,</span> and diehard New York Rangers fan <span>
              <FontAwesomeIcon
                    icon={faHockeyPuck}
                    size="md"
                    color="#FB5607"
              />
            </span>
             <span>.</span> I have a strong interest in cryptocurrency and all things web development.</p>
        </Col>
      </Row>
    </Container>
    </Fade>
  );
}


export default About;
