import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Signing from './Signing';
import '../../../css/Header.scss';

const Header = () => (
    <header className='appHeader'>
        <Logo />
        <Navigation />
        <Signing />
    </header>
);

export default Header;
