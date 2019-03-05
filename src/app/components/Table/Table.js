import React from 'react';
import PropTypes from 'prop-types';
import TableTabs from './TableTabs';
import TableBody from './TableBody';
import '../../../css/Table.scss';

const Table = ({ activeLeague, leagues, changeActiveLeague }) => (
    <section className='tableLeague'>
        <TableTabs
            activeLeague={ activeLeague }
            leagues={ leagues }
            changeActiveLeague={ changeActiveLeague }
        />
        <TableBody />
    </section>
);

Table.propTypes = {
    activeLeague: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
};

export default Table;
