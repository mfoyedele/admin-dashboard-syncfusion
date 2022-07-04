import React from 'react';

const date = new Date().getFullYear();
const Footer = () => (
  <div className='mt-24'>
    <p className='dark:text-gray-200 text-gray-700 text-center m-20'>
      © {date} All rights reserved by Stackeap Technologies
    </p>
  </div>
);

export default Footer;
