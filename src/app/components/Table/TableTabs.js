import React from 'react';
import PropTypes from 'prop-types';

const TableTabs = ({
    activeLeagueId,
    leagues,
    changeActiveLeague,
    fetchStandings,
}) => {
    const tabList = leagues.map((league) => {
        const onClick = () => {
            changeActiveLeague(league.id);
            fetchStandings(league.id);
        };
        return (
            <span
                key={league.id}
                className={ activeLeagueId === league.id ? 'activeTab' : 'tableTab' }
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
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchStandings: PropTypes.func.isRequired,
};

export default TableTabs;
