import * as React from 'react';
import { Component } from 'react';
import { Route} from 'react-router-dom';

import HelloWrapper from '../components/HelloWrapper';
import { SecondWrapper } from '../components/SecondWrapper';

class ExampleRouter extends Component <object, any> {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ HelloWrapper as any } />
        <Route path="/second" component={ SecondWrapper as any } />
      </div>
    );
  }
}

export default ExampleRouter;