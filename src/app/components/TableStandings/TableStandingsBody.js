import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';
import TableStandingsRow from './TableStandingsRow';

let TableStandingsHeader = ({ t }) => {
    const headers = [
        t('tableStandingsHeader.Position'),
        t('tableStandingsHeader.Team'),
        t('tableStandingsHeader.G'),
        t('tableStandingsHeader.W'),
        t('tableStandingsHeader.D'),
        t('tableStandingsHeader.L'),
        t('tableStandingsHeader.GS'),
        t('tableStandingsHeader.GC'),
        t('tableStandingsHeader.P'),
    ];
    return (
        <div className='tableHeader'>
            {headers.map((item, index) => (
                <span key={index}>{ item }</span>
            ))}
        </div>
    );
};

TableStandingsHeader.propTypes = {
    t: PropTypes.func,
};

TableStandingsHeader = globalizationHelper(TableStandingsHeader);

const TableStandingsBody = ({ activeLeagueId, leagues }) => {
    const foundLeague = leagues.find(item => item.id === activeLeagueId);
    if (foundLeague) {
        const standings = foundLeague.standings.items;

        return (
            <section className='tableBody'>
                <TableStandingsHeader />
                {standings && standings.map(item => (
                    <TableStandingsRow key={item.id} teamId={item.id} data={ item.standing } />
                ))}
            </section>
        );
    }
    return null;
};

TableStandingsBody.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
};

export default TableStandingsBody;
