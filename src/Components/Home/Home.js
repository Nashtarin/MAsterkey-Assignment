import React from 'react';
import Header from '../Shared/Header/Header';
import CoolThings from './CoolThings';

const Home = () => {
    return (
     <>
     <Header/>
     <div className='mt-3'>
        <CoolThings/>
     </div>
     </>
    );
};

export default Home;
