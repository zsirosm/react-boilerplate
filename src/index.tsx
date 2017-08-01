import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';

import './style.css';

// import HelloWrapper from './components/HelloWrapper';
import ExampleRouter from './routes/routes';

const rootEl = document.getElementById('example');

export const App = ReactDOM.render(
    <AppContainer>
      <Router>
        <ExampleRouter />
      </Router>
    </AppContainer>,
    document.getElementById("example")
);

if (module.hot) {
  console.log('module is hot');
  module.hot.accept('./routes/routes', () => {
    const NextApp = require('./routes/routes').default;
    ReactDOM.render(
      <AppContainer>
        <Router>
          <NextApp />
        </Router>
      </AppContainer>,
      rootEl
    );
  });
  console.log('after accept');
}