import { Link} from 'react-router-dom';
import React from 'react';
// import './index.css';

function Navbar(){
    return (
        <div>
            <Link to='/'>Home </Link>
            <Link to='/contacts'>Contacts List</Link>
        </div>
    )
};

export default Navbar;