import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { axis, axisTop } from 'd3-axis';

const prepareLevels = (initialLevel) => {

};

const LEVEL_RANGE = [0, 100];
const BAR_WIDTH = 15;

export default class Battery {
  constructor(element, initialLevel = 75) {
    this.selection = select(element);
    this.selection.append('g').attr('class', 'grid');
    this.selection.append('g').attr('class', 'bars');
  }

  _renderAxisY = (selection) => {

  };

  _renderAxisX = (selection) => {
    const self = this;
    this.axisXScale = scaleLinear()
      .domain(LEVEL_RANGE)
      .range(LEVEL_RANGE)

    selection
      .append('g')
      .classed('axis axis--x', true)
      .call(axisTop(self.axisXScale));
  };

  _renderAxes = (selection) => {
    const axes = selection.select('g.grid');

    this._renderAxisX(axes);
    //_renderAxisY(axes);
  };

  _renderLevel = (selection) => {
    const self = this;
    const bars = selection.selectAll('bars').data(self._data);

    const barsEnter = bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', BAR_WIDTH)
      .attr('height', 30)
      .attr('fill', 'red')
      .attr('transform', (d, i) => `translate(${i * 2 * BAR_WIDTH}, 0)`);
  }

  updateLevel = (newBatteryLevel) => {
    this._data = [0, 5, 10, 15, 20, 25, 30];
  };

  render = () => {
    const self = this;
    this.updateLevel();
    this.selection.call(self._renderAxes);

    const barsSelection = this.selection.data();
    this.selection.call(self._renderLevel);
  };
}
