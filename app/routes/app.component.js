import React, { PropTypes, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { get } from 'lodash';

import { appLocales, translationMessages } from '../i18n';


export class App extends PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app">
        <Helmet
          titleTemplate="%s - Ironman HUD Experiment"
          defaultTitle="Ironman HUD Experiment"
          meta={[
            { name: 'description', content: 'Ironman HUD Experiment' },
          ]}
        />

        <IntlProvider
          locale='en'
          messages={translationMessages.en}
        >
          {React.Children.only(this.props.children)}
        </IntlProvider>
      </div>
    );
  }
}
