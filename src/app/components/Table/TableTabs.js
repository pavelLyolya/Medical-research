import React from 'react';
import PropTypes from 'prop-types';

const TableTabs = ({ tabNames }) => {
    const tabList = tabNames.map((tab, id) => (
        <span key={id} className='tableTab'>{tab}</span>
    ));
    return (
        <div className='tableTabs'>
            {tabList}
        </div>
    );
};

TableTabs.propTypes = {
    tabNames: PropTypes.array.isRequired,
};

export default TableTabs;
