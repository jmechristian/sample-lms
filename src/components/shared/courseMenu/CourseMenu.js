import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import CourseHeader from './CourseHeader';
import CourseItem from './CourseItem';

const CourseMenu = () => {
  return (
    <>
      <div className='relative w-full h-full'>
        <div
          className='w-[440px] bg-real-dark shadow-2xl fixed z-30 left-10 top-28 bottom-10 rounded-r-lg overflow-auto'
          id='scrollers'
        >
          <CourseHeader id='C01' course='Packaging Foundations' />
          <CourseItem
            title='01. Welcome To Packaging Foundations'
            time='01:30'
          />
          <CourseItem title='02. What is Packaging?' time='04:41' />
          <CourseItem title='03. Evolution of Packaging' time='11:43' />
          <CourseItem title='04. Stakeholders in Packaging' time='02:46' />
          <CourseItem title='05. Careers in Packaging' time='00:00' />
          <CourseItem title='06. Packaging Development Process' time='00:00' />
          <CourseItem title='07. Sustainability' time='07:12' />
          <CourseItem title='08. Packaging Applications' time='00:00' />
          <CourseItem title='09. Know Your Product First' time='00:00' />
          <CourseItem title='10. Introduction to Wood' time='01:54' />
          <CourseItem title='11. Manufactuaring Wood' time='08:21' />
          <CourseHeader id='C02' course='Paperboard Cartons' />
          <CourseItem
            title='01. Welcome To Packaging Foundations'
            time='01:30'
          />
          <CourseItem title='02. What is Packaging?' time='04:41' />
          <CourseItem title='03. Evolution of Packaging' time='11:43' />
          <CourseItem title='04. Stakeholders in Packaging' time='02:46' />
          <CourseItem title='05. Careers in Packaging' time='00:00' />
          <CourseItem title='06. Packaging Development Process' time='00:00' />
          <CourseItem title='07. Sustainability' time='07:12' />
          <CourseItem title='08. Packaging Applications' time='00:00' />
          <CourseItem title='09. Know Your Product First' time='00:00' />
          <CourseItem title='10. Introduction to Wood' time='01:54' />
          <CourseItem title='11. Manufactuaring Wood' time='08:21' />
        </div>
        <div className='fixed z-50 left-10 bottom-10 bg-gradient-to-t from-real-dark h-[300px] w-[440px]'></div>
      </div>
    </>
  );
};

export default CourseMenu;
