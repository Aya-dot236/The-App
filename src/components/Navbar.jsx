import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className='Navbar'>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>

            </ul>

        </nav>

    );
};
export default Navbar;