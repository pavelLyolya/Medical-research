import React from 'react';
import PropTypes from 'prop-types';

const TableTabs = ({ activeLeague, leagues, changeActiveLeague }) => {
    const tabList = leagues.map((league) => {
        const onClick = () => changeActiveLeague(league.id);
        return (
            <span
                key={league.id}
                className={ activeLeague === league.id ? 'activeTab' : 'tableTab' }
                onClick={onClick}
            >
                {league.name}
            </span>
        );
    });
    return (
        <div className='tableTabs'>
            {tabList}
        </div>
    );
};

TableTabs.propTypes = {
    activeLeague: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
};

export default TableTabs;
