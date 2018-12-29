import React, { PureComponent } from 'react';

import { CameraContainer, CameraStream } from './camera.styles';

export class Camera extends PureComponent {
  static propTypes = {};

  videoRef = React.createRef();

  get video() {
    return this.videoRef.current;
  }

  render() {
    return (
      <CameraContainer>
        <CameraStream innerRef={this.videoRef} />
      </CameraContainer>
    );
  }
}
