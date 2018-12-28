import Searching from './searching';
import Speech from './speech';

const OPERATIONS_CHECK_INTERVAL = 200;

const baseModules = [
  Searching,
  Speech,
];

/**
 * @param config.camera - eyes
 */
class Jarvis {
  _modules = {};
  _operationsQueue = [];
  _operationsQueueChecker = null;

  config = {};

  constructor(config) {
    this.config = config;

    this._operationsQueueChecker = setInterval(this._resolveOperations, OPERATIONS_CHECK_INTERVAL);
  }
  
  _addModule = (Module) => {
    const moduleInstance = new Module();
    const name = Module.constructor.name;
    
    if (!moduleInstance.setup) {
      throw new Error(`[Module error] '${name}' module should have setup() function`);
    }
    
    moduleInstance.name = name;
    moduleInstance.setup(this);
    
    this._modules[name] = moduleInstance;
  }
  
  _resolveOperations = async () => {
    for (let index = 0; index < this._operationsQueue.length; index++) {
      await Promise.resolve(this._operationsQueue[index]);
    }
  }

  setup = (config) => {
    this.config = config;

    for (let index = 0; index < baseModules.length; index++) {
      this._addModule(baseModules[index]);
    }

    Object.freeze(this._modules);
  }

  destroy() {
    clearInterval(this._operationsQueueChecker);
  }
}

export default new Jarvis();
