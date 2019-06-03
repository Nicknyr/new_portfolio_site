import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';


const Contact = (props) => {
  return (
    <Fade bottom>
    <Container>
      <Row className="contact" id="contact">
        <Col xs={{size: 10, offset: 1}} md={{size: 6}}>
          <h3 className="h3">Contact Me</h3>
            <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  color="snow"
                />
          <Form>
          <FormGroup>
            <Label for="name-label">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <Label for="email-label">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter your email address" />
          </FormGroup>
          <FormGroup>
            <Label for="text-area-label">Your Message</Label>
            <Input type="textarea" name="text" id="message" rows="5" />
          </FormGroup>
          <Button id="contact-button">Submit</Button>
        </Form>
        </Col>
      </Row>
    </Container>
    </Fade>
  );
}


export default Contact;
