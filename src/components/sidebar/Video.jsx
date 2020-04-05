import React from 'react';
import styled from 'styled-components';

const videoId = 'D1pMyvwDmSc';

const StyledVideo = styled.div`
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video = () => (
  <StyledVideo>
    <h4>Para leer mejor</h4>
    <div className={'video-container'}>
      <iframe
        width={'560'}
        height={'315'}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder={'0'}
        allow={
          'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        }
        allowFullscreen={true}
      ></iframe>
    </div>
  </StyledVideo>
);

export default Video;
