import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../../globalizationHelper';
import TeamsHeader from '../../Teams/TeamsHeader';
import FixturesList from '../../../containers/FixturesListContainer';
import Pagination from '../../../containers/PaginationContainer';
import DateChooser from '../../../containers/DateChooserContainer';
import { team } from '../../../services/translationKeys';

const Fixtures = ({ t }) => (
    <div className='fixtures'>
        <TeamsHeader headerName={t(team.headers.Fixtures)} />
        <DateChooser />
        <Pagination />
        <FixturesList />
    </div>
);

Fixtures.propTypes = {
    t: PropTypes.func,
};

export default globalizationHelper(Fixtures);
