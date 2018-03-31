import Stats from 'stats.js';
import { Application } from 'pixi.js';

import Battery from './battery';

const initStats = (container) => {
  const stats = new Stats();
  stats.showPanel(0);
  container.appendChild(stats.dom);

  requestAnimationFrame(
    function loop() {
      stats.update();
      requestAnimationFrame(loop);
    }
  );
};

const getSceneConfig = (props = {}) => {
  return Object.assign({
    height: window.innerHeight,
    width: window.innerWidth,
    resolution: window.devicepixelratio,
    autoStart: true,
    transparent: true,
  }, props);
};

export default class Scene extends Application {
  constructor(props) {
    const sceneConfig = getSceneConfig(props);
    super(sceneConfig);
    props.container.appendChild(this.view);

    this.modules = {};

    initStats(props.container);
    this.initTextures();
    this.initModules();

    this.animate = this.animate.bind(this);

    this.ticker.add(this.animate);
  }

  initModules() {
    this.modules.battery = new Battery();

    this.stage.addChild(...Object.values(this.modules));
  }

  initTextures() {

  }

  updateBatteryLevel(newBatteryLevel) {
    this.modules.battery.updateLevel(newBatteryLevel);
  }

  animate(delta) {
    //this.modules.battery.rotation += 0.1 * delta;
  }
}