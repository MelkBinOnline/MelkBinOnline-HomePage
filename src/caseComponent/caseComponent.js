import React from 'react';
import srcImg from './coverImage1.jpg';
import './caseComponent.css';
const CaseComponent = () => {
  return (
  <div className='case'>
      <div className="img-con">
          <img  src={srcImg} alt="" />
      </div>
      <a className='link' href="https://i-0003.hostman.site/">بازدید آنلاین</a>
  </div>
  );
};

export default CaseComponent;
