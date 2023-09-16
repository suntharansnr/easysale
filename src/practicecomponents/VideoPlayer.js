import React, { useRef } from 'react';
import video from '../assets/videos/video.mp4'
function VideoPlayer() {
  const videoRef = useRef();
  
  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const setVolume = (volume) => {
    videoRef.current.volume = volume;
  };

  const seekTo = (timeInSeconds) => {
    videoRef.current.currentTime = timeInSeconds;
  };

  return (
    <div>
      <video ref={videoRef} src={video} />

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>

      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => seekTo(30)}>Seek to 30s</button>
        <button onClick={() => seekTo(60)}>Seek to 60s</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
