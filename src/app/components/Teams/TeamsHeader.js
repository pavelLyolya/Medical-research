import React from 'react';
import PropTypes from 'prop-types';

const TeamsHeader = ({ headerName }) => (
    <header className='teamsHeader' >
        <h2>{headerName}</h2>
    </header>
);

TeamsHeader.propTypes = {
    headerName: PropTypes.string.isRequired,
};

export default TeamsHeader;
