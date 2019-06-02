import React, { Component } from 'react';
import Logo from '../images/logo4.png';
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
           <NavbarBrand href="/">
           <span id="navbar-brand">
            <img src={Logo}  alt="logo" height="40"></img>
           </span>
           </NavbarBrand>
           <NavbarToggler onClick={this.toggle} id="hamburger"/>
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem className="nav-item" id="nav-link">
                 <NavLink href="#about">About</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="#portfolio">Portfolio</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="#contact">Contact</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }



export default NavigationBar;
