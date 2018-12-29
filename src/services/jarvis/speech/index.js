import EVENTS from '../events';
import { Analyzer } from './analyzer';
import { Synthesizer } from './synthesizer';
import { Recognizer } from './recognizer';

const DEFAULT_LANGUAGE = 'en-US';

export default class Speech {
  _lang = DEFAULT_LANGUAGE;
  _analyzer = new Analyzer();
  _synthesizer = new Synthesizer({ lang: this._lang });
  _recognizer = new Recognizer({ lang: this._lang });

  speak = this._synthesizer.speak;

  setup = (jarvis) => {
    jarvis.emit(EVENTS.INIT, 'I\'m able to recognize speaking!');
    this.speak('I\'m able to recognize speaking!');
  }

}
