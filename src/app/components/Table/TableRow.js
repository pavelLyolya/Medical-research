import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableRow = ({ teamId, data }) => (
    <Link to={`/teams/${teamId}`} className='tableRow'>
        {data.map((item, idx) => (
            <span key={idx}>{ item }</span>
        ))}
    </Link>
);

TableRow.propTypes = {
    data: PropTypes.array.isRequired,
    teamId: PropTypes.number.isRequired,
};

export default TableRow;
