import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';

const TeamControlls = ({ t, isPlayersActive, togglePlayersFixtures }) => (
    <div className='TeamControlls'>
        <button
            className={isPlayersActive ? 'teamControllActive' : 'teamControll'}
            disabled={isPlayersActive}
            onClick={togglePlayersFixtures}
        >{t('team.controlls.players')}</button>
        <button
            className={isPlayersActive ? 'teamControll' : 'teamControllActive'}
            disabled={!isPlayersActive}
            onClick={togglePlayersFixtures}
        >{t('team.controlls.fixtures')}</button>
    </div>
);

TeamControlls.propTypes = {
    t: PropTypes.func,
    isPlayersActive: PropTypes.bool.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
};

export default globalizationHelper(TeamControlls);
