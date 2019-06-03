import React, { Component } from 'react';
import Logo from '../images/logo4.png';
import Fade from 'react-reveal/Fade';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
     super(props);

     this.toggle = this.toggle.bind(this);
     this.state = {
       isOpen: false
     };
   }
   toggle() {
     this.setState({
       isOpen: !this.state.isOpen
     });
   }
   render() {
     return (
       <div>
         <Navbar expand="md" light id="my-nav">
           <Fade left>
             <NavbarBrand href="/">
             <span id="navbar-brand">
              <img src={Logo}  alt="logo" height="40"></img>
             </span>
             </NavbarBrand>
          </Fade>
           <NavbarToggler onClick={this.toggle} id="hamburger"/>
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <Fade right>
               <NavItem className="nav-item" id="nav-link">
                 <NavLink href="#about">About</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="#portfolio">Portfolio</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="#contact">Contact</NavLink>
               </NavItem>
               </Fade>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }



export default NavigationBar;
