import React from 'react';
import { Navbar, MainContent } from '../components/';

const HomePage = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div>
        <MainContent/>
      </div>
    </div>
  )
}

export default HomePage