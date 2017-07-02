import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';

import messages from './home.messages';
import { LanguageSelector } from './languageSelector/languageSelector.component';

import Camera from '../camera/camera.container';
import { BatteryLevel } from '../components/batteryLevel/batteryLevel.component';

export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    language: PropTypes.string.isRequired,
    setLanguage: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home">
        <Helmet
          title="Homepage"
        />

        <Camera />
        <BatteryLevel />

        <LanguageSelector
          language={this.props.language}
          setLanguage={this.props.setLanguage}
          router={this.props.router}
        />
      </div>
    );
  }
}
