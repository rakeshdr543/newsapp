import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
        <nav>
        <ul>
        <li>
        <Link to='/'>India</Link>
        </li>
        <li><Link to='/us'>United States</Link></li>
        <li><Link to='/uk'>United Kingdom</Link></li>
        </ul>
        </nav>    
        </div>
    )
}

export default Navbar
