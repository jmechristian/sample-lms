import React from 'react';
import PlayerBar from './PlayerBar';

const VideoMain = () => {
  return (
    <div className='w-full h-full relative bg-dark'>
      <div className='mx-auto relative video-height aspect-video py-4 bg-zinc-800'>
        <PlayerBar />
      </div>
    </div>
  );
};

export default VideoMain;
