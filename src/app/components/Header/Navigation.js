import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <nav className='navigation'>
        <Link to='/table' className='headerLink'>table</Link>
        <Link to='/teams' className='headerLink'>teams</Link>
    </nav>
);

export default Navigation;
