import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data }) => (
    <div className='tableRow'>
        {data.map((item, idx) => (
            <span key={idx}>{ item }</span>
        ))}
    </div>
);

TableRow.propTypes = {
    data: PropTypes.array.isRequired,
};

export default TableRow;
