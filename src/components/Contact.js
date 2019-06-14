import React, { Component } from 'react';
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
import Slide from 'react-reveal/Slide';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleForm = e => {
   axios.post(
     "https://formcarry.com/s/VphZwAcq6nJ",
     this.state,
     {headers: {"Accept": "application/json"}}
     )
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });

   e.preventDefault();
 }

 handleFields = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    return (
      <Fade bottom>
      <Container>
        <Row className="contact" id="contact">
          <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}}>
            <Fade left>
            <h3 className="h3">Contact Me</h3>
              <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    color="snow"
                  />
            <Form action="https://formcarry.com/s/VphZwAcq6nJ" method="POST" accept-charset="UTF-8">
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
              <Input value={this.state.value} onChange={this.handleChange} type="textarea" name="text" id="message" rows="5" />
            </FormGroup>
            <Button id="contact-button">Submit</Button>
          </Form>
          </Fade>
        </Col>
        </Row>
      </Container>
      </Fade>
    );
  }

}


export default Contact;
