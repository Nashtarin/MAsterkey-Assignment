import React, { useState } from 'react';
import { useEffect } from 'react';
import coolThingsSingle from './coolThingsSingle';
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
        <div className='d-flex'>
            <h1>We picked some <span style={{color:"#FFAE5D"}}>cool things </span> for you!</h1>
            <div className="row row-cols-1 row-cols-md-3">
                {
                    data.slice(0,6).map(i =><SingleItem
                    key={i._id}
                    item={i}>

                    </SingleItem>)
                }

            </div>
        </div>
    );
};

export default CoolThings;