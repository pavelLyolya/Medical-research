import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';

const TeamsHeader = ({ isFavoritesShown, headerName }) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });
    return (
        <header className='teamsHeader' >
            <h2>{isFavoritesShown ? t('teams.favoriteTeams') : headerName}</h2>
        </header>
    );
};

TeamsHeader.propTypes = {
    headerName: PropTypes.string.isRequired,
    isFavoritesShown: PropTypes.bool,
};

export default TeamsHeader;
