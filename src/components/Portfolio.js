import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';


const Portfolio = (props) => {
  return (
    <Container>
      <Row className="portfolio">
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
          <CardHeader className="project-header">Project One</CardHeader>
          <CardBody>
            <CardText className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</CardText>
            <Button className="project-button">View Online</Button>
            <CardImg bottom src={image1} height={150} width={150} alt="Card image cap" />
          </CardBody>
        </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}}  md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
            <CardHeader className="project-header">Project One</CardHeader>
            <CardBody>
              <CardText className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</CardText>
              <Button className="project-button">View Online</Button>
              <CardImg bottom src={image2} height={150} width={150} alt="Card image cap" />
            </CardBody>
          </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offser: 0}} className="portfolio-project">
            <Card>
              <CardHeader className="project-header">Project One</CardHeader>
              <CardBody>
                <CardText className="project-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut diam.</CardText>
                <Button className="project-button">View Online</Button>
                <CardImg bottom src={image3} height={150} width={150} alt="Card image cap" />
              </CardBody>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
