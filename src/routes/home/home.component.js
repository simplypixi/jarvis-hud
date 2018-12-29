import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Camera from '../camera/camera.container';
import HUD from '../components/hud/hud.container';
import Jarvis from '../../services/jarvis';

export class Home extends PureComponent {
  static propTypes = {};

  cameraRef = React.createRef();

  componentDidMount() {
    Jarvis.setup({
      camera: this.cameraRef.current,
    });
  }

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
