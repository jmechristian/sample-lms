import React from 'react';
import PlayerBar from './PlayerBar';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

const VideoMain = () => {
  return (
    <div className='w-full h-full relative bg-dark'>
      <div className='mx-auto relative video-height aspect-video py-4 bg-zinc-800 flex justify-center items-center'>
        <PlayerBar />
        <div className='shadow-2xl rounded-full w-44 h-44 relative bottom-12'>
          <PlayCircleIcon className='fill-white/80 w-full h-full' />
        </div>
      </div>
    </div>
  );
};

export default VideoMain;
