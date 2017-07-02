import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { axis, axisTop } from 'd3-axis';
import { range, last } from 'lodash';


const LEVEL_DIFF = 5;
const LEVEL_RANGE = [0, 100];
const FULL_RANGE = range(...LEVEL_RANGE, LEVEL_DIFF);
const BAR_WIDTH = 15;
const BAR_HEIGHT = 50;

export default class Battery {
  constructor(element, initialLevel = 75) {
    this.selection = select(element);
    this.selection.append('g').attr('class', 'grid');
    this.selection.append('g').attr('class', 'bars');

    this.selection.call(this._renderAxes);
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
  };

  _calcBarHeight = (d, i) => BAR_HEIGHT * ((this._data.length - i) / this._data.length);

  _calcBarWidth = (i) => i * 2 * BAR_WIDTH;

  _isLowLevel = () => this._data < 5 ? 'red' : '#3DB1C1';

  _renderLevel = (selection) => {
    const self = this;
    const bars = selection
                  .select('g.bars')
                    .selectAll('rect.bar')
                    .data(self._data);
    const barsEnter = bars
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', BAR_WIDTH)
      .attr('height', this._calcBarHeight)
      .attr('fill', this._isLowLevel)
      .attr('transform', (d, i) => `translate(${this._calcBarWidth(i)}, 0)`)
      // .transition()
      //   .delay((d, i) => i * 300)
      //   .duration(250)
      //   .style('opacity', 1);

    bars
      .exit()
      .remove()
  }

  updateLevel = (newBatteryLevel) => {
    const newData = FULL_RANGE.filter(value => value <= newBatteryLevel);
    if (newBatteryLevel % LEVEL_DIFF) {
      newData.push(last(newData) + LEVEL_DIFF);
    }
    console.log('batt',newBatteryLevel, newData)
    this._data = newData;
  };

  render = (batteryLevel) => {
    this.updateLevel(batteryLevel);
    this.selection.call(this._renderLevel);
  };
}
