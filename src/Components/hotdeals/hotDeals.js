import React, { useEffect, useState } from 'react';
import SingleItem from '../Home/SingleItem';

const hotDeals = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('./fakeApi.json')
        .then(res => res.json())
        .then(data => setData(data))

    },[])
    return (<div>
        <h4 style={{borderBottom:'1px dashed #FFAE5D'}}>Today's Hot Deals</h4>
          <div className="ms-5 row row-cols-1 row-cols-md-6">
               
               {
                   data.slice(7,11).map(i =><SingleItem
                   item={i}>

                   </SingleItem>)
               }

           </div>
    </div>)
      
;
};

export default hotDeals;