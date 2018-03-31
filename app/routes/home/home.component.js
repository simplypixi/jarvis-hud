import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import envConfig from 'env-config';

import messages from './home.messages';

import Camera from '../camera/camera.container';
import HUD from '../components/hud/hud.container.js';

export class Home extends PureComponent {
  static propTypes = {
    items: PropTypes.object,
    router: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="jarvis">
        <Helmet
          title="Jarvis"
        />

        <Camera />
        <HUD />
      </div>
    );
  }
}
