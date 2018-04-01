import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';

import messages from './home.messages';

import Camera from '../camera/camera.container';
import HUD from '../components/hud/hud.container';

export class Home extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div>
        <Helmet title="Jarvis" />
        <Camera />
        <HUD />
      </div>
    );
  }
}
