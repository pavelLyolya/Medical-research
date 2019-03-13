import React from 'react';
import PropTypes from 'prop-types';

const FavoritesButton = ({ isFavoritesShown, toggleShowingFavorites }) => (
    <button
        className='favoritesButton'
        onClick={toggleShowingFavorites}
    >
        {isFavoritesShown ? 'Hide favorite teams' : 'Show only favorite teams'}
    </button>
);

FavoritesButton.propTypes = {
    toggleShowingFavorites: PropTypes.func.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
};

export default FavoritesButton;
