import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';

const FavoritesButton = ({ isFavoritesShown, toggleShowingFavorites }) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });

    return (
        <button
            className='favoritesButton'
            onClick={toggleShowingFavorites}
        >
            {isFavoritesShown ? t('teams.showAllTeams') : t('teams.showOnlyFavoriteTeams')}
        </button>
    );
};

FavoritesButton.propTypes = {
    toggleShowingFavorites: PropTypes.func.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
};

export default FavoritesButton;
