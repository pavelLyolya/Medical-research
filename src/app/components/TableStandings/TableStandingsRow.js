import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableStandingsRow = ({ teamId, data }) => (
    <Link to={`/teams/${teamId}`} className='tableRow'>
        {data.map((item, index) => (
            <span key={index}>{ item }</span>
        ))}
    </Link>
);

TableStandingsRow.propTypes = {
    data: PropTypes.array.isRequired,
    teamId: PropTypes.number.isRequired,
};

export default TableStandingsRow;
