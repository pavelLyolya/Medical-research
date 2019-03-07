import React from 'react';
import PropTypes from 'prop-types';
import TableStandingsRow from './TableStandingsRow';

const TableStandingsHeader = () => {
    const headers = ['Position', 'Team', 'G', 'W', 'D', 'L', 'GS', 'GC', 'P'];
    return (
        <div className='tableHeader'>
            {headers.map((item, index) => (
                <span key={index}>{ item }</span>
            ))}
        </div>
    );
};

const TableStandingsBody = ({ activeLeagueId, leagues }) => {
    const foundLeague = leagues.find(item => item.id === activeLeagueId);
    if (foundLeague) {
        const standings = foundLeague.standings.items;

        return (
            <section className='tableBody'>
                <TableStandingsHeader />
                {standings && standings.map(item => (
                    <TableStandingsRow key={item.id} teamId={item.id} data={ item.standing } />
                ))}
            </section>
        );
    }
    return null;
};

TableStandingsBody.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
};

export default TableStandingsBody;
