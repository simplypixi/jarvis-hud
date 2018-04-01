import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';

import { appLocales, translationMessages } from '../i18n';

export class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    match: PropTypes.object.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Helmet
          titleTemplate="%s - Jarvis HUD Experiment"
          defaultTitle="Jarvis HUD Experiment"
          meta={[
            { name: 'description', content: 'Jarvis HUD Experiment' },
          ]}
        />

        <IntlProvider
          locale="en"
          messages={translationMessages.en}
          location="en"
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </Fragment>
    );
  }
}
