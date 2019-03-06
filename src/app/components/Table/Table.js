import React from 'react';
import PropTypes from 'prop-types';
import TableTabs from './TableTabs';
import TableBody from './TableBody';
import '../../../css/Table.scss';

class Table extends React.Component {
    componentDidMount() {
        this.props.fetchStandings(this.props.activeLeagueId);
    }

    render() {
        return (
            <section className='tableLeague'>
                <TableTabs
                    activeLeagueId={ this.props.activeLeagueId }
                    leagues={ this.props.leagues }
                    changeActiveLeague={ this.props.changeActiveLeague }
                    fetchStandings={ this.props.fetchStandings }
                />
                <TableBody
                    activeLeagueId={ this.props.activeLeagueId }
                    leagues={ this.props.leagues }
                />
            </section>
        );
    }
}

Table.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchStandings: PropTypes.func.isRequired,
};

export default Table;
