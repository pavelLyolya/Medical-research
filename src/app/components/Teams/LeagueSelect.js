import React from 'react';
import PropTypes from 'prop-types';

const LeagueSelect = ({ leaguesArray }) => (
    <div className='leagueSelect'>
        <select className='select' >
            {leaguesArray.map(league => (
                <option key={league.id}>
                    {league.name}
                </option>))}
        </select>
    </div>
);

LeagueSelect.propTypes = {
    leaguesArray: PropTypes.array.isRequired,
};

export default LeagueSelect;
