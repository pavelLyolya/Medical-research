import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import globalizationHelper from '../globalizationHelper';
import { pageNames } from '../../services/constants';

const Navigation = ({
    t, activePageName, activateTable, activateTeams,
}) => (
    <nav className='navigation'>
        <Link to='/table'
            className={activePageName === pageNames.TABLE ? 'headerLinkActive' : 'headerLink'}
            onClick={activateTable}
        >
            {t('header.navigation.table')}
        </Link>
        <Link to='/teams'
            className={activePageName === pageNames.TEAMS ? 'headerLinkActive' : 'headerLink'}
            onClick={activateTeams}
        >
            {t('header.navigation.teams')}
        </Link>
    </nav>
);

Navigation.propTypes = {
    t: PropTypes.func,
    activePageName: PropTypes.string.isRequired,
    activateTable: PropTypes.func.isRequired,
    activateTeams: PropTypes.func.isRequired,
};

export default globalizationHelper(Navigation);
