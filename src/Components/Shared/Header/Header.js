import { faAddressBook, faColonSign, faLocation, faMap, faMapLocation, faMapLocationDot, faMapMarker, faMapPin, faSearch, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <>
         {/* div for first part heading */}
        <div className='d-flex justify-content-between'>
           
            <div>
                <h1><b>shop</b>cart</h1>
            </div>
             {/* div for 2nd part heading */} <div className='d-flex'>
              <p> <FontAwesomeIcon icon={faUser}/></p> 
              <h6 className='ms-1'>Sign in</h6>
            </div>
        </div>
        <hr/>
        {/*div for 2nd part heading 
            */}
        <div  className='d-flex justify-content-between mb-1'>
         <div style={{backgroundColor:"#FFAE5D",borderRadius:'20px'}} className='p-1 d-flex'>
            <p className='mt-2'><FontAwesomeIcon icon={faMapMarker}/></p>
            <p className='mt-2'>Dhaka,1212</p>
         </div>
         <div className="w-50 input-group mb-3">
  <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faSearch}/></button>
</div>
        </div>
        {/* div for 3rd part heading */}
        <div style={{color:'grey'}}className='d-flex justify-content-evenly'>
           
               <a>Fresh</a><a>Today's Deal</a><a>Mobiles</a><a>Gift Cards</a><a>Women Clothings</a><a>Men Clothing</a><a>Kid's Clothing</a><a>Health</a><a>Pet Corner</a><a>Books</a><a>Beauty</a>Kitchen<a>Bedroom</a><a>Sports</a><a>Bags</a>
            
        </div>
            
        </>
    );
};

export default Header;