import React from 'react';
import PropTypes from 'prop-types';
import FixturesItem from './FixturesItem';

const FixturesList = ({
    fixtures,
    fixtureDetails,
    currentTeamId,
    updateDetails,
    leagueId,
}) => fixtures && (
    <section className='fixturesList'>
        {fixtures.map(item => (
            <FixturesItem
                key={item.id}
                id={item.id}
                isActive={item.id === fixtureDetails.activeItemId}
                currentTeamId={currentTeamId}
                homeTeam={item.homeTeam}
                awayTeam={item.awayTeam}
                score={item.score.fullTime}
                utcDate={item.utcDate}
                updateDetails={updateDetails}
                leagueId={leagueId}
            />
        ))}
    </section>
);

FixturesList.propTypes = {
    fixtures: PropTypes.array,
    fixtureDetails: PropTypes.object.isRequired,
    currentTeamId: PropTypes.number.isRequired,
    updateDetails: PropTypes.func.isRequired,
    leagueId: PropTypes.number.isRequired,
};

export default FixturesList;
