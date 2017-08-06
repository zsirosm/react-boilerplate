import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/routes';

import './style.css';

class Root extends React.Component <any, any> {
  render() {
    return (
      <div>
        <Router>
          <Routes />
        </Router>
      </div>
    )
  }
}

export default Root;