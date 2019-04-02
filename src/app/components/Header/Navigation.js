import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';
import { pageNames } from '../../services/constants';

const Navigation = ({ activePageName, activateTable, activateTeams }) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });

    return (
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
};

Navigation.propTypes = {
    activePageName: PropTypes.string.isRequired,
    activateTable: PropTypes.func.isRequired,
    activateTeams: PropTypes.func.isRequired,
};

export default Navigation;
