import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = ({ activePageName, changeActivePage }) => (
    <nav className='navigation'>
        <Link to='/table'
            className={activePageName === 'table' ? 'headerLinkActive' : 'headerLink'}
            onClick={changeActivePage}
        >
            table
        </Link>
        <Link to='/teams'
            className={activePageName === 'teams' ? 'headerLinkActive' : 'headerLink'}
            onClick={changeActivePage}
        >
            teams
        </Link>
    </nav>
);

Navigation.propTypes = {
    activePageName: PropTypes.string.isRequired,
    changeActivePage: PropTypes.func.isRequired,
};

export default Navigation;
