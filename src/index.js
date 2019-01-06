import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import { GlobalStyle } from './theme/global';
import NextApp from './routes';
import * as serviceWorker from './serviceWorker';
import { store, browserHistory } from './services/store';

if (process.env.NODE_ENV === 'development') {
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
    const DevToolsComponent = require('./utils/devtools.component').default;
    const devToolsRoot = window.document.createElement('div');

    window.document.body.appendChild(devToolsRoot);

    ReactDOM.render(
      <Provider store={store}>
        <DevToolsComponent />
      </Provider>,
      devToolsRoot
    );
  }
}

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <>
          <GlobalStyle />
          <NextApp />
        </>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render();

serviceWorker.unregister();
