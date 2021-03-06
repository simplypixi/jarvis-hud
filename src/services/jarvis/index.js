import EventEmitter from 'event-emitter';
import Searching from './searching';
import Speech from './speech';
import EVENTS from './events';

const OPERATIONS_CHECK_INTERVAL = 2000;

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
  _emitter = new EventEmitter();
  
  config = {};

  constructor(config) {
    this.config = config;

    this._operationsQueueChecker = setInterval(this._resolveOperations, OPERATIONS_CHECK_INTERVAL);
    this._bindListeners();
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
    console.log('*** Resolving queued operations ***')
    for (let index = 0; index < this._operationsQueue.length; index++) {
      await Promise.resolve(this._operationsQueue[index]);
    }
  }

  _bindListeners = () => {
    this.on(EVENTS.INIT, (message) => console.info(`*** ${message} ***`));
  }

  on = this._emitter.on;
  off = this._emitter.off;
  emit = this._emitter.emit;

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
