import React, {PureComponent, PropTypes} from 'react';

export class Camera extends PureComponent {
  static propTypes = {

  };

  constructor() {
    super(...arguments);

    this.bindVideoStream = this.bindVideoStream.bind(this);
  }

  componentWillMount() {
    const self = this;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        this.bindVideoStream(window.URL.createObjectURL(stream))
      });
    }
  }

  bindVideoStream(stream) {
    this.video.src = stream;
    this.video.play();
  }

  componentWillUnmount() {
    this.video.stop();
    this.video.src = null;
  }

  render() {
    return (
      <div className="camera">
        <video
          className="camera-stream"
          ref={(video) => {this.video = video;}} />
      </div>
    )
  }
};
