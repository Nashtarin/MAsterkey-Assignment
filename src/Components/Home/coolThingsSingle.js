import React from 'react';

const coolThingsSingle = (props) => {
    console.log(props)
    const {name,picture,discount}=props.item
    return (
        <div style={{width: '18rem'}} className="card col">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <img src={picture} alt="" />
    
    <span className='text-danger'>-{discount}%</span>
  </div>
</div>
    );
};

export default coolThingsSingle;