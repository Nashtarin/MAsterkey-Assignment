import React from 'react';
import Header from '../Shared/Header/Header';
import CoolThings from './CoolThings';
import pic from '../../images/Component 1.png'


const Home = () => {
    return (
     <>
     <Header/>
     <div className='my-3'>
        <CoolThings/>
     </div>
     <img style={{width:"85%",height:'87%'}}src={pic} alt="" />
     <hotDeals/>
     </>
    );
};

export default Home;
