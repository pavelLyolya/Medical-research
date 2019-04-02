import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';
import { teams } from '../../services/translationKeys';

const TeamsHeader = ({ t, isFavoritesShown, headerName }) => (
    <header className='teamsHeader' >
        <h2>{isFavoritesShown ? t(teams.favoriteTeams) : headerName}</h2>
    </header>
);

TeamsHeader.propTypes = {
    t: PropTypes.func,
    headerName: PropTypes.string.isRequired,
    isFavoritesShown: PropTypes.bool,
};

export default globalizationHelper(TeamsHeader);
