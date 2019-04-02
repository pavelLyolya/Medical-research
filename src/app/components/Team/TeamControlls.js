import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';

const TeamControlls = ({ isPlayersActive, togglePlayersFixtures }) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });

    return (
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
};

TeamControlls.propTypes = {
    isPlayersActive: PropTypes.bool.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
};

export default TeamControlls;
