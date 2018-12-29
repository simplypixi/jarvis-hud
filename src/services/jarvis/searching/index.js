import EVENTS from '../events';

export default class Searching {
  setup(jarvis) {
    jarvis.emit(EVENTS.INIT, 'I\'m able to find information!');
  }
}
