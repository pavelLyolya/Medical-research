import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import LeagueSelect from './LeagueSelect';
import FavoritesButton from './FavoritesButton';
import TeamsList from './TeamsList';
import findLeague from '../../services/functions';
import '../../../css/Teams.scss';

class Teams extends React.Component {
    componentDidMount() {
        this.props.fetchTeams(this.props.activeLeagueId);
    }

    render() {
        const foundLeague = findLeague(this.props.leagues, this.props.activeLeagueId);
        return (
            <section className='teamsSection'>
                <TeamsHeader
                    headerName={foundLeague.name || 'League Name'}
                />
                <div className='teamsSubheader'>
                    <LeagueSelect leaguesArray={this.props.leagues} />
                    <FavoritesButton />
                </div>
                <TeamsList teamsArray={foundLeague.teams.items} />
            </section>
        );
    }
}

Teams.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchTeams: PropTypes.func.isRequired,
};

export default Teams;
