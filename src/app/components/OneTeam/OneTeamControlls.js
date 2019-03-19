import React from 'react';
import PropTypes from 'prop-types';

const OneTeamControlls = ({ isPlayersActive, togglePlayersFixtures }) => (
    <div className='oneTeamControlls'>
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

OneTeamControlls.propTypes = {
    isPlayersActive: PropTypes.bool.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
};

export default OneTeamControlls;
