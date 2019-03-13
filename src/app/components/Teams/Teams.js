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
        let teamsArray = foundLeague.teams.items;
        if (this.props.isFavoritesShown) {
            const favoriteTeams = window.localStorage.getItem('favoriteTeams');
            if (favoriteTeams) {
                teamsArray = JSON.parse(favoriteTeams);
            } else {
                teamsArray = [];
            }
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
};

export default Teams;
