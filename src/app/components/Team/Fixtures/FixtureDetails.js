import React from 'react';
import { FixturesItem } from './FixturesList';

const item = {
    id: 1,
    homeTeam: {
        id: 1,
        name: 'FC Bayern',
    },
    awayTeam: {
        id: 1,
        name: 'FC Chealse',
    },
    score: {
        homeTeam: 0,
        awayTeam: 3,
    },
    utcDate: '1992-03-04T00:00:00Z',
};

const statistics = {
    mainTeam: {
        name: 'FC Bayern',
        wins: 3,
    },
    secondTeam: {
        name: 'FC Chealse',
        wins: 4,
    },
    draws: 3,
};
const lastGames = [
    {
        id: 1,
        homeTeam: {
            id: 1,
            name: 'FC Bayern',
        },
        awayTeam: {
            id: 1,
            name: 'FC Chealse',
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
    {
        id: 2,
        homeTeam: {
            id: 1,
            name: 'FC Bayern',
        },
        awayTeam: {
            id: 1,
            name: 'FC Chealse',
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
    {
        id: 3,
        homeTeam: {
            id: 1,
            name: 'FC Bayern',
        },
        awayTeam: {
            id: 1,
            name: 'FC Chealse',
        },
        utcDate: '1992-03-04T00:00:00Z',
    },
];

const FixtureDetails = () => (
    <div className='fixtureDetails'>
        <FixturesItem
            homeTeam={item.homeTeam}
            awayTeam={item.awayTeam}
            score={item.score}
            utcDate={item.utcDate}
            statistics={statistics}
        />
        <div className='lastGamesPanel'>
            {lastGames.map(game => (
                <FixturesItem
                    key={game.id}
                    homeTeam={game.homeTeam}
                    awayTeam={game.awayTeam}
                    utcDate={game.utcDate}
                />
            ))}
        </div>
    </div>
);

export default FixtureDetails;
