import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import App from './app.container';
import { Home } from './home';
import { NotFound } from './notFound';

export class RootContainer extends Component {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/404" component={NotFound} />

        </Switch>
      </App>
    );
  }
}

export default withRouter(RootContainer);
