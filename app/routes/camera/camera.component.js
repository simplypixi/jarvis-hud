import React, { PureComponent } from 'react';

import { CameraContainer, CameraStream } from './camera.styles';

export class Camera extends PureComponent {
  static propTypes = {};

  constructor() {
    super(...arguments);

    this.bindVideoStream = this.bindVideoStream.bind(this);
  }

  componentWillMount() {
    const self = this;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
        },
      }).then((stream) => {
        this.bindVideoStream(window.URL.createObjectURL(stream));
      });
    }
  }

  componentWillUnmount() {
    this.video.stop();
    this.video.src = null;
  }

  bindVideoStream(stream) {
    this.video.src = stream;
    this.video.play();
  }

  render() {
    return (
      <CameraContainer>
        <CameraStream innerRef={(video) => {this.video = video;}} />
      </CameraContainer>
    );
  }
}
