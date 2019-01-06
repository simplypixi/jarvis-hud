import EVENTS from '../events';
import { Analyzer } from './analyzer';

import Artyom from 'artyom.js';
const _artyom = new Artyom();

export const DEFAULT_LANGUAGE = 'en-GB';
export const DEFAULT_ACTION = () => {};

export default class Speech {
  _artyom = new Artyom();
  _lang = DEFAULT_LANGUAGE;
  _analyzer = new Analyzer();

  initialize = async () => {
    return await _artyom.initialize({
      lang: this._lang,
      continuous: true,
      soundex: true,
      debug: true,
      // obeyKeyword: 'listen to me', 
      // executionKeyword: 'and do it now',
      listen: true,
      //name: 'Jarvis'
    })
  }

  setupCommands = () => {
    _artyom.addCommands([
      {
        indexes: ['Hello', 'Hi', 'is someone there'],
        action: (i) => {
          this.say('I\'m Groot');
        }
      },
    ]);
  }

  say = _artyom.say.bind(_artyom);

  setup = async (jarvis) => {
    try {
      await this.initialize();
      this.setupCommands();
      jarvis.emit(EVENTS.INIT, 'I\'m able to recognize speaking!');
    } catch (error) {
      console.log('Error while initializing speech module');
    }
  }
  
  addCommands = () => _artyom.addCommands;

  addCommandListener = async (commands = [], isSmart = false, callAction = DEFAULT_ACTION) => {
    const result = await _artyom.on(commands, isSmart)
    return await callAction(result);
  };

  handleAction = () => {
  }
}
