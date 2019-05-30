import React, { Component } from 'react';
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
           <span id="navbar-brand">Nick Kinlen</span>
           </NavbarBrand>
           <NavbarToggler onClick={this.toggle} id="hamburger"/>
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem className="nav-item" id="nav-link">
                 <NavLink href="/">About</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="/">Portfolio</NavLink>
               </NavItem>
               <NavItem id="nav-link">
                 <NavLink href="/">Contact</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>
       </div>
     );
   }
 }



export default NavigationBar;
