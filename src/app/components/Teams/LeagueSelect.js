import React from 'react';
import PropTypes from 'prop-types';

const LeagueSelect = ({
    isFavoritesShown,
    activeLeagueId,
    leaguesArray,
    changeActiveLeague,
}) => (
    <div className='leagueSelect'>
        <select className='select' disabled={isFavoritesShown} value={activeLeagueId} onChange={changeActiveLeague} >
            {leaguesArray.map(league => (
                <option key={league.id} value={league.id}>
                    {league.name}
                </option>))}
        </select>
    </div>
);

LeagueSelect.propTypes = {
    leaguesArray: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
};

export default LeagueSelect;
