import React from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Timestamp = ({ time }) => {
  return (
    <div className='flex items-center border-2 rounded-full px-2 border-white/50'>
      <div>
        <PlayIcon className='fill-white/50 h-4 w-4' />
      </div>
      <div className='text-xs'>{time}</div>
    </div>
  );
};

export default Timestamp;
