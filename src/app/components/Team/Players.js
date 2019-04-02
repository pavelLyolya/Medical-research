import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';
import TeamsHeader from '../Teams/TeamsHeader';
import PlayersList from './PlayersList';

const Players = ({ t, players }) => (
    <div className='players'>
        <TeamsHeader headerName={t('team.headers.Players')} />
        <PlayersList players={players} />
    </div>
);

Players.propTypes = {
    t: PropTypes.func,
    players: PropTypes.array.isRequired,
};

export default globalizationHelper(Players);
