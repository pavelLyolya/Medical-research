import React from 'react';
import TableTabs from './TableTabs';
import TableBody from './TableBody';
import '../../../css/Table.scss';

const Table = () => (
    <section className='tableLeague'>
        <TableTabs tabNames={ ['English', 'German', 'Spanish', 'Italian', 'French'] } />
        <TableBody />
    </section>
);

export default Table;
