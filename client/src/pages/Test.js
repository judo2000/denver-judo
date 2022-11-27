import React from 'react';
import VideoJS from '../components/VideoJS';
import video from '../assets/Denver-Judo-Splash-1080.mp4';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
const Test = () => {
  const videoJsOptions = {
    muted: true,
    autoPlay: true,
    controls: true,
    responsive: true,
    loop: true,
    aspectRation: '16/9',
    sources: [
      {
        src: video,
        type: 'video/mp4',
      },
    ],
  };
  return (
    <Row>
      <Col xs={12}>
        <VideoJS options={videoJsOptions} />
      </Col>

      <div class='relative video-box pt-0 mt-0 d-flex justify-content-center rounded'>
        <VideoJS options={videoJsOptions} />
        <div className=' absolute text-center'>
          <h1 className='myContent home-heading my-4 pt-4'>
            Train for competition or self defence at Denver Judo
          </h1>
        </div>
      </div>
    </Row>
  );
};

export default Test;
