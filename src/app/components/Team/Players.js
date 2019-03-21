import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from '../Teams/TeamsHeader';
import PlayersList from './PlayersList';

const Players = ({ players }) => (
    <div className='players'>
        <TeamsHeader headerName='Players' />
        <PlayersList players={players} />
    </div>
);

Players.propTypes = {
    players: PropTypes.array.isRequired,
};

export default Players;
