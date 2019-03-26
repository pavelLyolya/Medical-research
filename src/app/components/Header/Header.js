import React from 'react';
import Logo from './Logo';
import NavigationContainer from '../../containers/NavigationContainer';
// import Signing from './Signing';
import '../../../css/Header.scss';

const Header = () => (
    <header className='appHeader'>
        <Logo />
        <NavigationContainer />
        {/* <Signing /> */}
    </header>
);

export default Header;
