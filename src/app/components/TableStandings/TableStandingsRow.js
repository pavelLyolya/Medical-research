import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableStandingsRow = ({ teamId, data }) => (
    <Link to={`/teams/${teamId}`} className='tableRow'>
        {data.map((item, idx) => (
            <span key={idx}>{ item }</span>
        ))}
    </Link>
);

TableStandingsRow.propTypes = {
    data: PropTypes.array.isRequired,
    teamId: PropTypes.number.isRequired,
};

export default TableStandingsRow;
