import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { HUDContainer } from './hud.styles';

import Scene from './objects/scene';

export class HUD extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    startWatchingBattery: PropTypes.func.isRequired,
    cancelWatchingBattery: PropTypes.func.isRequired,
  };

  sceneContainerRef = React.createRef();

  get sceneContainer() {
    return this.sceneContainerRef.current;
  }

  componentDidMount() {
    this.initScene();
    this.props.startWatchingBattery();
  }

  componentDidUpdate({ level }) {
    if (level !== this.props.level) {
      this.scene.updateBatteryLevel(level * 100);
    }
  }

  componentWillUnmount() {
    this.cancelWatchingBattery();
  }

  initScene() {
    this.scene = new Scene({
      container: this.sceneContainer,
    });
  }

  render() {
    return (
      <HUDContainer ref={this.sceneContainerRef} />
    );
  }
}
