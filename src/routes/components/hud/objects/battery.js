import { range } from 'lodash';
import { Sprite, Graphics, Container } from 'pixi.js';

const LEVEL_DIFF = 10;
const LEVEL_RANGE = [0, 100];
const FULL_RANGE = range(...LEVEL_RANGE, LEVEL_DIFF);
const BAR_WIDTH = 15;
const BAR_HEIGHT = 50;

const calcBarHeight = (i) => BAR_HEIGHT * ((FULL_RANGE.length - i) / FULL_RANGE.length);

const calcBarWidth = (i) => i * 2 * BAR_WIDTH;

export default class Battery extends Container {
  constructor() {
    super();

    this.initBars();
  }

  initBars() {
    this.bars = FULL_RANGE.map((batteryLevel, index) => {
      const barSprite = new Sprite();

      const bar = new Graphics();
      bar.beginFill('0x3DB1C1', 0.5);
      bar.drawRect(
        calcBarWidth(index), 0,
        BAR_WIDTH, calcBarHeight(index)
      );
      bar.endFill();

      barSprite.props = {
        level: batteryLevel,
      };
      barSprite.addChild(bar);
      return barSprite;
    });

    this.addChild(...this.bars);
  }

  updateLevel(newBatteryLevel) {
    this.bars.forEach((bar) => {
      bar.renderable = bar.props.level <= newBatteryLevel;
    });
  }
}
