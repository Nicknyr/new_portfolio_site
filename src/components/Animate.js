import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Animate extends Component {
  render() {
  return (
    <CSSTransition in={true} timeout={2000} classNames="my-node">
        {<h1>Hello</h1>}
    </CSSTransition>

  );
 }
}


export default Animate;
