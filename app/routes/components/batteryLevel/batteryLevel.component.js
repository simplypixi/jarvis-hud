import React, {PureComponent, PropTypes} from 'react';
import d3 from 'd3';

import Battery from './batteryLevel.d3';

export class BatteryLevel extends PureComponent {
  static propTypes = {
    level: PropTypes.number.isRequired,
    fetchBattery: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchBattery();
    this.cancelInterval = setInterval(this.props.fetchBattery, 5000);
  }

  componentDidMount() {
    this.battery = new Battery(this.canvas);
    this.battery.render();
  }

  componentWillReceiveProps({ level }){
    this.battery.render(level * 100);
  }

  componentWillUnmount() {
    this.cancelInterval();
  }

  render() {
    return (
      <div className="battery">
        <svg
          width={500}
          height={50}
          ref={(svg) => {this.canvas = svg;}}
        ></svg>
      </div>
    );
  }
}
