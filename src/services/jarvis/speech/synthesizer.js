import { synthesis } from 'speech-js';

export class Synthesizer {
  _lang = null;

  constructor ({ lang }) {
    this._lang = lang;
  }

  speak = (sentence) => {
    synthesis(sentence, this._lang);
  }
}
