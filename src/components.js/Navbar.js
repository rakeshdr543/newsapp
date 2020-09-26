import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const navStyle={
        color:'white'
    }
    return (
        <div>
        <nav>
        <ul>
        <div>
        <Link to='/'>

       
         <span style={navStyle}>India</span>
        </Link>

        </div>
        <div>
        <Link to='/us'>
        <span style={navStyle}>United States</span></Link>

        </div>
        <div>
        <Link to='/uk'><span style={navStyle}>United Kingdom</span></Link>

        </div>
       
       
        </ul>
        </nav>    
        </div>
    )
}

export default Navbar
