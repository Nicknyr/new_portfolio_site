import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import Bitcoin from '../images/bitcoin-medium.png';
import EuroMap from '../images/euro-medium.png';
import RecipeBox from '../images/recipe-box-medium.png';
import Pomodoro from '../images/pomodoro-medium.png';
import SpaceX from '../images/space.png';
import Steem from '../images/steem-cropped.png';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader } from 'reactstrap';


const Portfolio = (props) => {
  return (
    <Container>
      <Row className="portfolio" id="portfolio">
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
          <CardHeader className="project-header">Steemit.com Top Posts</CardHeader>
          <CardBody>
            <CardText className="project-text">A React and Redux web app that uses the dSteem API to pull social media posts from the Steem blockchain</CardText>
            <Button className="project-button">View Online</Button>
            <CardImg bottom src={Steem} height={250} width={250} alt="Card image cap" />
          </CardBody>
        </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}}  md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
            <CardHeader className="project-header">Bitcoin Price Line Graph</CardHeader>
            <CardBody>
              <CardText className="project-text">A D3.js line graph that makes a call to the CryptoCompare API and plots Bitcoin prices</CardText>
              <Button className="project-button">View Online</Button>
              <CardImg bottom src={Bitcoin} height={250} width={250} alt="Card image cap" />
            </CardBody>
          </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offser: 0}} className="portfolio-project">
            <Card>
              <CardHeader className="project-header">European GDP Choropleth Map</CardHeader>
              <CardBody>
                <CardText className="project-text">Mapbox choropleth map that uses Leaflet.js and GeoJSON data to plot GDP by nation</CardText>
                <Button className="project-button">View Online</Button>
                <CardImg bottom src={EuroMap} height={250} width={250} alt="Card image cap" />
              </CardBody>
            </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
          <CardHeader className="project-header">React Recipe App</CardHeader>
          <CardBody>
            <CardText className="project-text">React.js app that allows the user to view, add, edit, and delete recipes in a To-Do-List style App</CardText>
            <Button className="project-button">View Online</Button>
            <CardImg bottom src={RecipeBox} height={250} width={250} alt="Card image cap" />
          </CardBody>
        </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}}  md={{size: 4, offset: 0}} className="portfolio-project">
          <Card>
            <CardHeader className="project-header">JQuery Pomodoro Clock</CardHeader>
            <CardBody>
              <CardText className="project-text">A classic Pomodoro clock built with Jquery</CardText>
              <Button className="project-button">View Online</Button>
              <CardImg bottom src={Pomodoro} height={250} width={250} alt="Card image cap" />
            </CardBody>
          </Card>
        </Col>
        <Col xs={{size: 10, offset: 1}} md={{size: 4, offser: 0}} className="portfolio-project">
            <Card>
              <CardHeader className="project-header">NASA & SpaceX Facilities Map</CardHeader>
              <CardBody>
                <CardText className="project-text">A Mapbox world map that plots NASA and SpaceX facilities using React-Leaflet, an official NASA API, and a SpaceX API</CardText>
                <Button className="project-button">View Online</Button>
                <CardImg bottom src={SpaceX} height={250} width={250} alt="Card image cap" />
              </CardBody>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}


export default Portfolio;
