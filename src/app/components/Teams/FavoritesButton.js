import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';
import { teams } from '../../services/translationKeys';

const FavoritesButton = ({ t, isFavoritesShown, toggleShowingFavorites }) => (
    <button
        className='favoritesButton'
        onClick={toggleShowingFavorites}
    >
        {isFavoritesShown ? t(teams.showAllTeams) : t(teams.showOnlyFavoriteTeams)}
    </button>
);

FavoritesButton.propTypes = {
    t: PropTypes.func,
    toggleShowingFavorites: PropTypes.func.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
};

export default globalizationHelper(FavoritesButton);
