import { Link} from 'react-router-dom';
import React from 'react';
import './index.css';

function Navbar(){
    return (
        <div className="nav">
            <Link to='/' className="nav-link">Home </Link>
            <Link to='/contacts' className="nav-link">Contacts List</Link>
        </div>
    )
};

export default Navbar;