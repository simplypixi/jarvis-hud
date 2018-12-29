import speech from 'speech-js';

export class Recognizer {
  _recognition = null;

  constructor(config) {
    this.setup(config)
  }

  setup({ lang, onUpdate }) {
    this.onUpdate = onUpdate;

    this._recognition = speech.recognition(lang);
    this._recognition.continuous = true;


    this._recognition.onend = this.handleEnd;
    this._recognition.onresult = this.handleResult;
    this._recognition.onspeechstart = this.handleSpeechStart;

    this._recognition.start();
  }

  handleSpeechStart = () => {
    console.log('test')
  }

  handleResult = (e) => {
    let result = e.results[0][0].transcript;
    console.log('Recognition result: ', result)
    this.onUpdate(result);
  }

  handleEnd = () => {
    this._recognition.start();
  }

  destroy() {
    if (this._recognition) {
      this._recognition.stop()
      this._recognition = null;
    }
  }
}
