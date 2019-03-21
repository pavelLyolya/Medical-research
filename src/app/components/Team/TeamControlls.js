import React from 'react';
import PropTypes from 'prop-types';

const TeamControlls = ({ isPlayersActive, togglePlayersFixtures }) => (
    <div className='TeamControlls'>
        <button
            className={isPlayersActive ? 'teamControllActive' : 'teamControll'}
            disabled={isPlayersActive}
            onClick={togglePlayersFixtures}
        >players</button>
        <button
            className={isPlayersActive ? 'teamControll' : 'teamControllActive'}
            disabled={!isPlayersActive}
            onClick={togglePlayersFixtures}
        >fixtures</button>
    </div>
);

TeamControlls.propTypes = {
    isPlayersActive: PropTypes.bool.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
};

export default TeamControlls;
