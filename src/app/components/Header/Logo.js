import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <h1>
        <Link
            to='/'
            className='logo'
        >Football statistics</Link>
    </h1>
);

export default Logo;
