import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pageNames } from '../../actions/actionTypes';

const Navigation = ({ activePageName, activateTable, activateTeams }) => (
    <nav className='navigation'>
        <Link to='/table'
            className={activePageName === pageNames.TABLE ? 'headerLinkActive' : 'headerLink'}
            onClick={activateTable}
        >
            table
        </Link>
        <Link to='/teams'
            className={activePageName === pageNames.TEAMS ? 'headerLinkActive' : 'headerLink'}
            onClick={activateTeams}
        >
            teams
        </Link>
    </nav>
);

Navigation.propTypes = {
    activePageName: PropTypes.string.isRequired,
    activateTable: PropTypes.func.isRequired,
    activateTeams: PropTypes.func.isRequired,
};

export default Navigation;
