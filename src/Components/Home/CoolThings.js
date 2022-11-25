import React, { useState } from 'react';
import { useEffect } from 'react';

import SingleItem from './SingleItem';
const CoolThings = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('./fakeApi.json')
        .then(res => res.json())
        .then(data => setData(data))

    },[])
    console.log(data)
    return (
        <div className='d-flex justify-content-between'>
            <h1>We picked some <span style={{color:"#FFAE5D"}}>cool things </span> for you!</h1>
            <div>
                 <h4 style={{borderBottom:'1px dashed #FFAE5D'}}>hot deals for you</h4>
            <div className="ms-5 row row-cols-1 row-cols-md-3">
               
               {
                   data.slice(0,6).map(i =><SingleItem
                   key={i._id}
                   item={i}>

                   </SingleItem>)
               }

           </div>

            </div>
           
           
        </div>
    );
};

export default CoolThings;