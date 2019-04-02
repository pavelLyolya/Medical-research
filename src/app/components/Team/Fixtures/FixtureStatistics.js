import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../../globalizationHelper';

const FixtureStatistics = ({
    t,
    homeTeamWins,
    awayTeamWins,
    draws,
    homeTeamName,
    awayTeamName,
}) => (
    <div className='fixtureStatistics'>
        <span>{t('team.fixtures.statistics')}:</span>
        <span>{homeTeamName} {t('team.fixtures.wins')}: {homeTeamWins}</span>
        <span>{awayTeamName} {t('team.fixtures.wins')}: {awayTeamWins}</span>
        <span>{t('team.fixtures.draws')}: {draws}</span>
    </div>
);

FixtureStatistics.propTypes = {
    t: PropTypes.func,
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    homeTeamWins: PropTypes.number.isRequired,
    awayTeamWins: PropTypes.number.isRequired,
    draws: PropTypes.number.isRequired,
};

export default globalizationHelper(FixtureStatistics);
