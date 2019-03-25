import React from 'react';
import TeamsHeader from '../../Teams/TeamsHeader';
import FixturesList from '../../../containers/FixturesListContainer';
import Pagination from '../../../containers/PaginationContainer';
import DateChooser from '../../../containers/DateChooserContainer';

const Fixtures = () => (
    <div className='fixtures'>
        <TeamsHeader headerName='Fixtures' />
        <DateChooser />
        <Pagination />
        <FixturesList />
    </div>
);

export default Fixtures;
