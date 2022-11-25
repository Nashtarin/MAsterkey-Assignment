import React from 'react';

const SingleItem = (props) => {
    console.log(props)
    const {name,picture,discount}=props.item
    return (
     <div className="col">
           <div style={{width: '10rem'}} className="card h- 25">
  
  <div className="card-body h-25 ">
  <p className="card-title">{name}</p>
  <img style={{height:'60px',width:'65px'}}src={picture} alt="" />
  
  <span className='text-danger'>-{discount}%</span>
  </div>
  </div>
     </div>
    );
};

export default SingleItem;
