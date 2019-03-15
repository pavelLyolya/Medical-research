import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from '../../Teams/TeamsHeader';
import FixturesList from './FixturesList';

const fixtures = [
    {
        id: 1,
        homeTeam: 'FC Bayern',
        awayTeam: 'FC Chealse',
        score: {
            homeTeam: 0,
            awayTeam: 3,
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
    {
        id: 2,
        homeTeam: 'FC Bayern',
        awayTeam: 'FC Chealse',
        score: {
            homeTeam: 0,
            awayTeam: 3,
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
    {
        id: 3,
        homeTeam: 'FC Bayern',
        awayTeam: 'FC Chealse',
        score: {
            homeTeam: 0,
            awayTeam: 3,
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
    {
        id: 4,
        homeTeam: 'FC Bayern',
        awayTeam: 'FC Chealse',
        score: {
            homeTeam: 0,
            awayTeam: 3,
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
];

class Fixtures extends React.Component {
    render() {
        return (
            <div className='fixtures'>
                <TeamsHeader headerName='Fixtures' />
                <FixturesList fixtures={fixtures} />
            </div>
        );
    }
}

// Players.propTypes = {
//     players: PropTypes.array.isRequired,
// };

export default Fixtures;
