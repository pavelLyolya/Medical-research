import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';
import TeamsHeader from '../Teams/TeamsHeader';
import PlayersList from './PlayersList';

const Players = ({ players }) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });
    return (
        <div className='players'>
            <TeamsHeader headerName={t('team.headers.Players')} />
            <PlayersList players={players} />
        </div>
    );
};

Players.propTypes = {
    players: PropTypes.array.isRequired,
};

export default Players;
