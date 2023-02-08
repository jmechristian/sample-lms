import React from 'react';

const CourseHeader = ({ course, id }) => {
  return (
    <div className='w-full py-5 pl-6 pr-4 bg-zinc-800 rounded-r-lg'>
      <div className='flex gap-3 items-center'>
        <div className='w-12 h-12 rounded-full border-4 border-light-yellow inline-block'>
          <div className='flex h-full justify-center items-center'>
            <div className='text-light-yellow font-semibold font-greycliff'>
              100
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-0'>
          <div className='font-semibold text-white leading-tight'>{id}</div>
          <div className='font-greycliff font-semibold text-3xl text-light-yellow leading-none'>
            {course}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
