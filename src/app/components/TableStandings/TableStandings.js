import React from 'react';
import PropTypes from 'prop-types';
import TableStandingsTabs from './TableStandingsTabs';
import TableStandingsBody from './TableStandingsBody';
import '../../../css/TableStandings.scss';

class TableStandings extends React.Component {
    componentDidMount() {
        this.props.activateTable();
        this.props.fetchStandings(this.props.activeLeagueId);
    }

    componentWillUnmount() {
        this.props.deactivateTable();
    }

    render() {
        return (
            <section className='tableLeague'>
                <TableStandingsTabs
                    activeLeagueId={ this.props.activeLeagueId }
                    leagues={ this.props.leagues }
                    changeActiveLeague={ this.props.changeActiveLeague }
                    fetchStandings={ this.props.fetchStandings }
                />
                <TableStandingsBody
                    activeLeagueId={ this.props.activeLeagueId }
                    leagues={ this.props.leagues }
                />
            </section>
        );
    }
}

TableStandings.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchStandings: PropTypes.func.isRequired,
    activateTable: PropTypes.func.isRequired,
    deactivateTable: PropTypes.func.isRequired,
};

export default TableStandings;
