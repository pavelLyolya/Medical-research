import React from 'react';
import PropTypes from 'prop-types';

const TeamsHeader = ({ isFavoritesShown, headerName }) => (
    <header className='teamsHeader' >
        <h2>{isFavoritesShown ? 'Favorite teams' : headerName}</h2>
    </header>
);

TeamsHeader.propTypes = {
    headerName: PropTypes.string.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
};

export default TeamsHeader;
