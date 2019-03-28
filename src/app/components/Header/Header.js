import React from 'react';
import Logo from './Logo';
import NavigationContainer from '../../containers/NavigationContainer';
import '../../../css/Header.scss';

const Header = () => (
    <header className='appHeader'>
        <Logo />
        <NavigationContainer />
    </header>
);

export default Header;
