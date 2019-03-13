import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import LeagueSelect from './LeagueSelect';
import FavoritesButton from './FavoritesButton';
import TeamsList from './TeamsList';
import { findObjectOnId } from '../../services/functions';
import '../../../css/Teams.scss';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.changeActiveLeague = this.changeActiveLeague.bind(this);
    }

    componentDidMount() {
        this.props.fetchTeams(this.props.activeLeagueId);
    }

    changeActiveLeague(e) {
        this.props.changeActiveLeague(+e.target.value);
    }

    render() {
        const foundLeague = findObjectOnId(this.props.leagues, this.props.activeLeagueId);
        return (
            <section className='teamsSection'>
                <TeamsHeader
                    headerName={foundLeague.name || 'League Name'}
                />
                <div className='teamsSubheader'>
                    <LeagueSelect
                        activeLeagueId={this.props.activeLeagueId}
                        leaguesArray={this.props.leagues}
                        changeActiveLeague={this.changeActiveLeague}
                    />
                    <FavoritesButton />
                </div>
                <TeamsList
                    teamsArray={foundLeague.teams.items}
                    activeLeagueId={this.props.activeLeagueId}
                    addFavoriteTeam={this.props.addFavoriteTeam}
                />
            </section>
        );
    }
}

Teams.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchTeams: PropTypes.func.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
};

export default Teams;
