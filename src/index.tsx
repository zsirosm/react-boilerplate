import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './root';

const rootEl = document.getElementById('example');

export const App = ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootEl
);

if (module.hot) {
  console.log('module is hot');
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
  console.log('after accept');
}