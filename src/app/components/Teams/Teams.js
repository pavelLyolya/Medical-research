import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import LeagueSelect from './LeagueSelect';
import FavoritesButton from './FavoritesButton';
import TeamsList from './TeamsList';
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
        const foundLeague = this.props.leagues.find(
            league => league.id === this.props.activeLeagueId,
        );
        let teamsArray;
        if (this.props.isFavoritesShown) {
            teamsArray = this.props.favoriteTeams;
        } else if (foundLeague) {
            teamsArray = foundLeague.teams.items;
        } else {
            return null;
        }
        return (
            <section className='teamsSection'>
                <TeamsHeader
                    headerName={foundLeague.name || 'League Name'}
                    isFavoritesShown={this.props.isFavoritesShown}
                />
                <div className='teamsSubheader'>
                    <LeagueSelect
                        activeLeagueId={this.props.activeLeagueId}
                        leaguesArray={this.props.leagues}
                        changeActiveLeague={this.changeActiveLeague}
                        isFavoritesShown={this.props.isFavoritesShown}
                    />
                    <FavoritesButton
                        isFavoritesShown={this.props.isFavoritesShown}
                        toggleShowingFavorites={this.props.toggleShowingFavorites}
                    />
                </div>
                <TeamsList
                    teamsArray={teamsArray}
                    activeLeagueId={this.props.activeLeagueId}
                    addFavoriteTeam={this.props.addFavoriteTeam}
                    deleteFavoriteTeam={this.props.deleteFavoriteTeam}
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
    deleteFavoriteTeam: PropTypes.func.isRequired,
    toggleShowingFavorites: PropTypes.func.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
};

export default Teams;
