import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import DateChooser from './DateChooser';

const FixtureStatistics = ({
    mainTeam,
    secondTeam,
    draws,
}) => (
    <div className='fixtureStatistics'>
        <span>Statistics:</span>
        <span>{mainTeam.name} wins: {mainTeam.wins}</span>
        <span>{secondTeam.name} wins: {secondTeam.wins}</span>
        <span>Draws: {draws}</span>
    </div>
);

FixtureStatistics.propTypes = {
    mainTeam: PropTypes.object.isRequired,
    secondTeam: PropTypes.object.isRequired,
    draws: PropTypes.number.isRequired,
};

export const FixturesItem = ({
    homeTeam, awayTeam, score, utcDate, statistics,
}) => (
    <div className='fixturesItem'>
        <header className='fixturesItemHeader'>
            <h3>{homeTeam} - {awayTeam}</h3>
            {score && <span>{score.homeTeam} - {score.awayTeam}</span>}
        </header>
        <p className='fixturesItemDate'>Date: {new Date(utcDate).toDateString()}</p>
        {statistics && <React.Fragment>
            <hr />
            <FixtureStatistics
                mainTeam={statistics.mainTeam}
                secondTeam={statistics.secondTeam}
                draws={statistics.draws}
            />
        </React.Fragment>}
    </div>
);

FixturesItem.propTypes = {
    homeTeam: PropTypes.string.isRequired,
    awayTeam: PropTypes.string.isRequired,
    score: PropTypes.object,
    utcDate: PropTypes.string.isRequired,
    statistics: PropTypes.object,
};

const FixturesList = ({ fixtures }) => (
    <React.Fragment>
        <DateChooser />
        <Pagination />
        <section className='fixturesList'>
            {fixtures.map(item => (
                <FixturesItem
                    key={item.id}
                    homeTeam={item.homeTeam}
                    awayTeam={item.awayTeam}
                    score={item.score}
                    utcDate={item.utcDate}
                />
            ))}
        </section>
    </React.Fragment>
);

FixturesList.propTypes = {
    fixtures: PropTypes.array.isRequired,
};

export default FixturesList;
