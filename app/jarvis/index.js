import { fromPairs } from 'lodash';
import Searching from './searching';


const baseModules = [
  Searching
];

export default class Jarvis {
  constructor(args) {
    this.modules = {};
    this.dataSet = {
      internal: {},
    };
  }

  updateDataSet(newDataSet = {}) {
    this.dataSet = Object.assign({}, this.dataSet, newDataSet);
  }

  addModules(modulesList = []) {
    const modules = modulesList.map((Module) => {
      const module = new Module();
      const name = Module.constructor.name;

      if (!module.setup) {
        throw `[Module error] '${name}' module should have setup() function`;
      }

      module.name = name;
      module.setup(this);

      return [name, module];
    });

    this.modules = Object.assign({}, this.modules, modules);
  }

  run() {
    this.modules = this.addModules(baseModules);
  }
}