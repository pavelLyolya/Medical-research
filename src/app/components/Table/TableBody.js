import React from 'react';
import TableRow from './TableRow';

const TableHeader = () => (
    <TableRow className='tableHeader' data={ ['Position', 'Team', 'G', 'W', 'D', 'L', 'GS', 'GC', 'P'] } />
);

const TableBody = () => (
    <section className='tableBody'>
        <TableHeader />
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((itm, idx) => (
            <TableRow key={idx} data={ ['1', 'Chelsea FC', '38', '30', '3', '5', '85', '33', '93'] } />
        ))}
    </section>
);

export default TableBody;
