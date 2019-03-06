import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

const TableHeader = () => {
    const headers = ['Position', 'Team', 'G', 'W', 'D', 'L', 'GS', 'GC', 'P'];
    return (
        <div className='tableHeader'>
            {headers.map((item, idx) => (
                <span key={idx}>{ item }</span>
            ))}
        </div>
    );
};

const TableBody = ({ activeLeagueId, leagues }) => {
    const standings = leagues.find(item => item.id === activeLeagueId).standings.items;

    return (
        <section className='tableBody'>
            <TableHeader />
            {standings && standings.map(itm => (
                <TableRow key={itm.id} teamId={itm.id} data={ itm.standing } />
            ))}
        </section>
    );
};

TableBody.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
};

export default TableBody;
