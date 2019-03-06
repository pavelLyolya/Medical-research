import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableHeader = () => (
    <TableRow className='tableHeader' data={ ['Position', 'Team', 'G', 'W', 'D', 'L', 'GS', 'GC', 'P'] } />
);

const TableBody = ({ activeLeagueId, leagues }) => {
    const standings = leagues.find(item => item.id === activeLeagueId).standings.items;

    return (
        <section className='tableBody'>
            <TableHeader />
            {standings && standings.map((itm, idx) => (
                <TableRow key={idx} data={ itm } />
            ))}
        </section>
    );
};

TableBody.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
};

export default TableBody;
