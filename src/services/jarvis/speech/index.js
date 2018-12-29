import EVENTS from '../events';

export default class Speech {
  setup = (jarvis) => {
    jarvis.emit(EVENTS.INIT, 'I\'m able to recognize speaking!');
  }
}
