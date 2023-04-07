import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            {/* <link to='/'>Home</link>
            <link to='/review'>OrderReview</link>
            <link to='/about'>About</link>
            <link to='/contact'>Contact</link> */}
            {/* <Link to='/'>Home</Link> */}

            <Link to='/'>Home</Link>
            <Link to='/review'>OrderReview</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
};

export default Header;