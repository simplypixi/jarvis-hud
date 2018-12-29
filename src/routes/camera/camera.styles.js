import styled from 'styled-components';
import Webcam from 'react-webcam';

export const CameraContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    width: 100%;
    box-shadow: inset 0px 0px 291px 100px $color-black;
    height: 100%;
  }
`;

export const CameraStream = styled(Webcam)`
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%) scaleX(-1);
`;
