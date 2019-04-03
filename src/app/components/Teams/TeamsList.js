import React from 'react';
import PropTypes from 'prop-types';
import TeamItem from './TeamItem';
import { isFavorite } from '../../services/functions';

const TeamsList = ({
    teamsArray,
    activeLeagueId,
    addFavoriteTeam,
    deleteFavoriteTeam,
    favoriteTeams,
}) => teamsArray && (
    <section className='teamsList'>
        {teamsArray.map(item => <TeamItem
            key={item.teamId}
            team={item}
            isFavorite={isFavorite(favoriteTeams, item.teamId)}
            activeLeagueId={activeLeagueId}
            addFavoriteTeam={addFavoriteTeam}
            deleteFavoriteTeam={deleteFavoriteTeam}
        />)}
    </section>
);

TeamsList.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
    teamsArray: PropTypes.array,
};

export default TeamsList;
