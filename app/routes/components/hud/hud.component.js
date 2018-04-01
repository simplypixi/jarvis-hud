import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HUDContainer } from './hud.styles';

import Scene from './objects/scene';

export class HUD extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    fetchBattery: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.bindContainer = this.bindContainer.bind(this);
  }

  componentWillMount() {
    this.props.fetchBattery();
    this.cancelInterval = setInterval(this.props.fetchBattery, 5000);
  }

  componentDidMount() {
    this.initScene();
  }

  componentWillReceiveProps({ level }) {
    if (level !== this.props) {
      this.scene.updateBatteryLevel(level * 100);
    }
  }

  componentWillUnmount() {
    this.cancelInterval();
  }

  bindContainer(container) {
    this.container = container;
  }

  initScene() {
    this.scene = new Scene({
      container: this.container,
    });
  }

  render() {
    return (
      <HUDContainer innerRef={this.bindContainer} />
    );
  }
}
