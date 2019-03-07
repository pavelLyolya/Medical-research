import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';

let TableStandingsTab = ({ onClick, leagueName, className }) => (
    <span
        className={className}
        onClick={onClick}
    >
        {leagueName}
    </span>
);

TableStandingsTab.propTypes = {
    className: PropTypes.string.isRequired,
    leagueName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

TableStandingsTab = memo(TableStandingsTab);

const TableStandingsTabs = ({
    activeLeagueId,
    leagues,
    changeActiveLeague,
    fetchStandings,
}) => {
    const tabList = leagues.map((league) => {
        const onClick = useCallback(() => {
            changeActiveLeague(league.id);
            fetchStandings(league.id);
        }, []);
        return (
            <TableStandingsTab
                key={league.id}
                className={ activeLeagueId === league.id ? 'activeTab' : 'tableTab' }
                onClick={onClick}
                leagueName={league.name}
            />
        );
    });
    return (
        <div className='tableTabs'>
            {tabList}
        </div>
    );
};

TableStandingsTabs.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchStandings: PropTypes.func.isRequired,
};

export default memo(TableStandingsTabs);
