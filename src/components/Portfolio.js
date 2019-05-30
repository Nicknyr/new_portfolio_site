import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Portfolio = (props) => {
  return (
    <Container className="portfolio">
      <h3 className="h3">Projects</h3>
      <Row>
        <Col xs={{size: 12}} className="portfolio-project">
          <h4 className="project-h4">Project One</h4>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={{size: 12}} className="portfolio-project">
          <h4 className="project-h4">Project Two</h4>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={{size: 12}} className="portfolio-project">
          <h4 className="project-h4">Project Three</h4>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</p>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
