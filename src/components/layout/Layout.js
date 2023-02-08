import React from 'react';
import CourseMenuWrapper from '../shared/courseMenu/CourseMenuWrapper';
import LinksButton from '../shared/LinksButton';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <CourseMenuWrapper />
      <LinksButton />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
