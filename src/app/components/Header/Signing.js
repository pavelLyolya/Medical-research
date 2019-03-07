import React from 'react';
import HeaderButton from './HeaderButton';

const Signing = () => (
    <div className='signing'>
        <HeaderButton text='Sign in' />
        <span>or</span>
        <HeaderButton text='Sign up' />
    </div>
);

export default Signing;
