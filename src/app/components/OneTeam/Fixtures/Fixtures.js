import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from '../../Teams/TeamsHeader';
import FixturesList from './FixturesList';

const Fixtures = ({ fixtures }) => (
    <div className='fixtures'>
        <TeamsHeader headerName='Fixtures' />
        <FixturesList fixtures={fixtures} />
    </div>
);

Fixtures.propTypes = {
    fixtures: PropTypes.array.isRequired,
};

export default Fixtures;
